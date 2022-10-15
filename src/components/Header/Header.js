import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

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
          {user?.displayName && <p>{user.displayName}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
