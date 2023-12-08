import { Link } from 'react-router-dom';
import { User, logout } from '../lib/auth';

interface NavBarProps {
  user: User | null;
  onLogout: () => void;
}

function NavBar({ user, onLogout }: NavBarProps) {
  const handleLogout = () => {
    logout();
    onLogout();
  };

  const loggedIn = Boolean(user);
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
      </div>
      {loggedIn ? (
        <div className="navbar-end">
          <span className="navbar-item has-text-grey">
            {user.email}
          </span>
          <Link className="navbar-item" to="/jobs/new">
            Post Job
          </Link>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navbar-item" onClick={handleLogout}>
            Logout
          </a>
        </div>
      ) : (
        <div className="navbar-end">
          <Link className="navbar-item" to="/login">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
