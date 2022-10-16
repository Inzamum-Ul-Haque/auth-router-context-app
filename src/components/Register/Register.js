import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log("registered user", result.user);
      })
      .catch((error) => {
        console.error("Error ", error);
      });
  };

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Signed in user");
      })
      .catch((error) => {
        console.error("Error ", error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register now!</h1>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have an account?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleGoogleLogIn} className="btn btn-primary">
                  Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
