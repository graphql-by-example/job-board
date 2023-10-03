const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const companies = [
  {
    id: 'company1',
    name: 'Company A',
    description: LOREM_IPSUM,
  },
  {
    id: 'company2',
    name: 'Company B',
    description: LOREM_IPSUM,
  },
];

export const jobs = [
  {
    id: 'job1',
    title: 'Job 1',
    date: '2023-01-21',
    company: companies[0],
    description: LOREM_IPSUM,
  },
  {
    id: 'job2',
    title: 'Job 2',
    date: '2023-01-22',
    company: companies[1],
    description: LOREM_IPSUM,
  },
];
