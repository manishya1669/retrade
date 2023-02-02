import React from "react";
import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  );

  useEffect(
    () => {
      if (isError) {
        toast.error(message);
      }

      if (isSuccess || user) {
        navigate("/feed");
      }

      dispatch(reset());
    },
    [user, isError, isSuccess, message, navigate, dispatch]
  );

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = e => {
    e.preventDefault();

    const userData = { email, password };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <form className=" p-5 text-center my-5" onSubmit={onSubmit}>
      <div className=" flex gap-5 justify-center items-center py-3">
        <label htmlFor="usern">Username</label>
        <input
          id="Email"
          type="email"
          placeholder="email"
          value={email}
          name="email"
          className="input w-full max-w-xs border border-black"
          onChange={onChange}
        />
      </div>
      <div className=" flex gap-5 justify-center items-center py-3">
        <label htmlFor="passd">Password</label>
        <input
          id="Password"
          type="password"
          placeholder="password"
          value={password}
          name="password"
          className="input w-full max-w-xs border border-black"
          onChange={onChange}
        />
      </div>
      <div className=" mx-auto flex justify-center items-center gap-10 my-5">
        <button className="btn" type="submit">
          Log-In
        </button>
        <button className="btn">Create an Account</button>
      </div>
    </form>
  );
};

export default Login;
