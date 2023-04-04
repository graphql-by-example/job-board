import JobList from '../components/JobList';
import { jobs } from '../lib/fake-data';
import { getJobs } from '../lib/graphql/queries';

getJobs().then((jobs) => console.log('jobs:', jobs));

function HomePage() {
  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
