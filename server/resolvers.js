import { GraphQLError } from 'graphql';
import { getCompany } from './db/companies.js';
import { createJob, getJob, getJobs, getJobsByCompany } from './db/jobs.js';

export const resolvers = {
  Query: {
    company: async (_root, { id }) => {
      const company = await getCompany(id);
      if (!company) {
        throw notFoundError('No Company found with id ' + id);
      }
      return company;
    },
    job: async (_root, { id }) => {
      const job = await getJob(id);
      if (!job) {
        throw notFoundError('No Job found with id ' + id);
      }
      return job;
    },
    jobs: () => getJobs(),
  },

  Mutation: {
    createJob: (_root, { title, description }) => {
      const companyId = 'FjcJCHJALA4i'; // TODO set based on user
      return createJob({ companyId, title, description });
    },
  },

  Company: {
    jobs: (company) => getJobsByCompany(company.id),
  },

  Job: {
    company: (job) => getCompany(job.companyId),
    date: (job) => toIsoDate(job.createdAt),
  },
};

function notFoundError(message) {
  return new GraphQLError(message, {
    extensions: { code: 'NOT_FOUND' },
  });
}

function toIsoDate(value) {
  return value.slice(0, 'yyyy-mm-dd'.length);
}
