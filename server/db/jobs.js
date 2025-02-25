import { connection } from './connection.js';
import { generateId } from './ids.js';

const getJobTable = () => connection.table('job');

export async function getJobs() {
  return await getJobTable().select();
}

export async function getJob(id) {
  return await getJobTable().first().where({ id });
}

export async function createJob({ companyId, title, description }) {
  const job = {
    id: generateId(),
    companyId,
    title,
    description,
    createdAt: new Date().toISOString(),
  };
  await getJobTable().insert(job);
  return job;
}

export async function deleteJob(id) {
  const job = await getJobTable().first().where({ id });
  if (!job) {
    throw new Error(`Job not found: ${id}`);
  }
  await getJobTable().delete().where({ id });
  return job;
}

export async function updateJob({ id, title, description }) {
  const job = await getJobTable().first().where({ id });
  if (!job) {
    throw new Error(`Job not found: ${id}`);
  }
  const updatedFields = { title, description };
  await getJobTable().update(updatedFields).where({ id });
  return { ...job, ...updatedFields };
}
