import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => console.error("Error ", error));
  };

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <p className="btn btn-ghost normal-case text-xl">daisyUI</p>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/register">
            Register
          </Link>
          {user?.email && <p>{user.email}</p>}
          {user?.email ? (
            <button onClick={handleLogOut} className="btn">
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">Log In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
