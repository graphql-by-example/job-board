import { ApolloProvider } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { User, getUser } from './lib/auth';
import { apolloClient } from './lib/graphql/queries';
import NavBar from './components/NavBar';
import CompanyPage from './pages/CompanyPage';
import CreateJobPage from './pages/CreateJobPage';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import LoginPage from './pages/LoginPage';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUser);

  const handleLogin = (user: User) => {
    setUser(user);
    navigate('/');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <ApolloProvider client={apolloClient}>
      <NavBar user={user} onLogout={handleLogout} />
      <main className="section">
        <Routes>
          <Route index path="/"
            element={<HomePage />}
          />
          <Route path="/companies/:companyId"
            element={<CompanyPage />}
          />
          <Route path="/jobs/new"
            element={<CreateJobPage />}
          />
          <Route path="/jobs/:jobId"
            element={<JobPage />}
          />
          <Route path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
        </Routes>
      </main>
    </ApolloProvider>
  );
}

export default App;
