import { connection } from '../db/connection.js';

const INTERVAL = 4 * 60 * 60 * 1000; // 4h
const START_TIME = new Date('2025-01-31T09:00:00.000Z').getTime();

await connection.table('job').truncate();

const companyIds = await connection.table('company').pluck('id');

const jobs = [];
for (let n = 1; n <= 50; n++) {
  jobs.push({
    id: n.toString().padStart(12, '0'),
    companyId: companyIds[n % companyIds.length],
    title: `Job ${n}`,
    description: `This is the job number ${n}.`,
    createdAt: new Date(START_TIME + n * INTERVAL).toISOString(),
  });
}

await connection.table('job').insert(jobs);

process.exit();
