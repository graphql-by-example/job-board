import { Link } from 'react-router-dom';
import { formatDate } from '../lib/formatters';

interface Job {
  id: string;
  date: string;
  title: string;
  company?: {
    name: string;
  };
}

interface JobListProps {
  jobs: Job[];
}

function JobList({ jobs }: JobListProps) {
  return (
    <ul className="box">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

interface JobItemProps {
  job: Job;
}

function JobItem({ job }: JobItemProps) {
  const title = job.company
    ? `${job.title} at ${job.company.name}`
    : job.title;
  return (
    <li className="media">
      <div className="media-left has-text-grey">
        {formatDate(job.date)}
      </div>
      <div className="media-content">
        <Link to={`/jobs/${job.id}`}>
          {title}
        </Link>
      </div>
    </li>
  );
}

export default JobList;
