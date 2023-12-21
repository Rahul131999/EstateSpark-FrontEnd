import React from "react";
import {Link} from "react-router-dom"


function Register() {
  return (
    <div className="p-3 max-w-lg my-20 mx-auto bg-cover">
      <h1 className="text-4xl font-semibold my-10 text-center">Register</h1>
      <form className="flex flex-col gap-4 justify-center">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg "
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-80 disabled:opacity-60">Submit</button>
      </form>
      <div className="flex flex-row mt-7 gap-5">
        <p>Have an account ?</p>
        <Link to="/login">
            <span className="text-blue-700">login</span>
        </Link>
      </div>
    </div>
  );
}

export default Register;
