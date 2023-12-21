import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
        form
      );
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="p-3 max-w-lg my-20 mx-auto bg-cover">
      <h1 className="text-4xl font-semibold my-10 text-center">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center"
      >
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-80 disabled:opacity-60">
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      <div className="flex flex-row mt-7 gap-5">
        <p>Don't have an account ?</p>
        <Link to="/register">
          <span className="text-blue-700">register</span>
        </Link>
      </div>
      {error && <p className="text-red-600 mt-5">{error}</p>}
    </div>
  );
}

export default Login;
