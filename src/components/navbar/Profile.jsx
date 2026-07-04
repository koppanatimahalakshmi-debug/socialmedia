import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../../Utilities';
import { Link } from 'react-router-dom';

const Profile = () => {
  let navigate = useNavigate();
  let navigateToLogin = () => {
    navigate("/login");
  };
  let { logout } = useContext(authContext);
  let handleLogout = () => {
    localStorage.removeItem("id");
    logout();
  };

  let userId = localStorage.getItem("id");
  return (
    <>
    {userId ? (
      <button
      onClick={() => {
        handleLogout();
        navigateToLogin();
      }}
      >
        Logout
      </button>
    ) : (
      <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </>
    )}
    </>
  )
}

export default Profile;

