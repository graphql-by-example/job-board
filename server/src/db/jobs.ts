import { connection } from './connection.js';
import { generateId } from './ids.js';
import { JobEntity } from './types.js';

const getJobTable = () => connection.table<JobEntity>('job');

export async function countJobs() {
  const { count } = await getJobTable().first().count('*', { as: 'count' });
  return count as number;
}

export async function getJobs(limit: number, offset: number) {
  const query = getJobTable().select().orderBy('createdAt', 'desc');
  if (limit) {
    query.limit(limit);
  }
  if (offset) {
    query.offset(offset);
  }
  return await query;
}

export async function getJobsByCompany(companyId: string) {
  return await getJobTable().select().where({ companyId });
}

export async function getJob(id: string) {
  return await getJobTable().first().where({ id });
}

type CreateJobOptions = Pick<JobEntity, 'companyId' | 'title' | 'description'>;

export async function createJob({ companyId, title, description }: CreateJobOptions) {
  const job: JobEntity = {
    id: generateId(),
    companyId,
    title,
    description,
    createdAt: new Date().toISOString(),
  };
  await getJobTable().insert(job);
  return job;
}

export async function deleteJob(id: string, companyId: string) {
  const job = await getJobTable().first().where({ id, companyId });
  if (!job) {
    return null;
  }
  await getJobTable().delete().where({ id });
  return job;
}

type UpdateJobOptions = Pick<JobEntity, 'id' | 'companyId' | 'title' | 'description'>;

export async function updateJob({ id, companyId, title, description }: UpdateJobOptions) {
  const job = await getJobTable().first().where({ id, companyId });
  if (!job) {
    return null;
  }
  const updatedFields = { title, description };
  await getJobTable().update(updatedFields).where({ id });
  return { ...job, ...updatedFields } as JobEntity;
}
