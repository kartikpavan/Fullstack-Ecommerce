import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("LOGGING IN...");
  };

  return (
    <>
      <div className="py-6 ">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-4xl">
          <div className="w-full px-8 pt-12 pb-6">
            <p className="text-xl text-gray-600 text-center">Welcome back</p>
            <button className="btn btn-sm btn-outline w-full rounded-full mt-4 gap-x-4">
              <FcGoogle size={22} />
              Sign in with google
            </button>
            <div className="divider text-xs text-gray-400 uppercase">
              or login with email
            </div>
            <form className="form-control" onSubmit={handleSubmit}>
              <div>
                <label className="label-text font-bold mb-2 block">
                  Email Address
                </label>
                <input
                  className="input input-bordered w-full border-2"
                  type="email"
                  required
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="label-text font-bold mb-2">Password</label>
                  <Link
                    to="/reset"
                    className="text-xs text-gray-500"
                    onClick={() =>
                      (document.getElementById("my-modal-4").checked = false)
                    }
                  >
                    Forget Password?
                  </Link>
                </div>
                <input
                  className="input input-bordered w-full border-2"
                  type="password"
                  required
                />
              </div>
              <div className="mt-4">
                <button type="submit" className="btn w-full">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
