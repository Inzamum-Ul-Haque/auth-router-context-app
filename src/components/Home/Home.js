import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return <div>This will be home for {user?.email && user.email}</div>;
};

export default Home;
