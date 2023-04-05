import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import JobList from '../components/JobList';
import { getCompany } from '../lib/graphql/queries';

function CompanyPage() {
  const { companyId } = useParams();
  const [state, setState] = useState({
    company: null,
    loading: true,
    error: false,
  });
  useEffect(() => {
    (async () => {
      try {
        const company = await getCompany(companyId);
        setState({ company, loading: false, error: false });
      } catch (error) {
        console.log('error:', JSON.stringify(error, null, 2));
        setState({ company: null, loading: false, error: true });
      }
    })();
  }, [companyId]);

  console.log('[CompanyPage] state:', state);
  const { company, loading, error } = state;
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div className="has-text-danger">Data unavailable</div>;
  }
  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
      <h2 className="title is-5">
        Jobs at {company.name}
      </h2>
      <JobList jobs={company.jobs} />
    </div>
  );
}

export default CompanyPage;
