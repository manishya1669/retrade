import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaToiletPaperSlash, FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { email, password, passwordConfirm } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/feed");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error("Passwords do not match");
    } else {
      const userData = { email, password, passwordConfirm };
      console.log(userData);
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <form className="p-3" onSubmit={onSubmit}>
      <div className="p-4 flex gap-10 justify-center items-center my-5">
        
          <label htmlFor="Email">Email</label>
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
      <div className=" flex gap-4 justify-center items-center my-5">
        <label htmlFor="passwd">Password</label>
        <input
          id="passwd"
          type="text"
          placeholder="password"
          value={password}
          name="password"
          className="input w-full max-w-xs border border-black"
          onChange={onChange}
        />
      </div>
      <div className=" flex gap-4 justify-center items-center my-5 ">
        <label className="px-10" htmlFor="cpasswd">Confirm Password</label>
        <input
          id="cpasswd"
          type="text"
          placeholder="confirm password"
          value={passwordConfirm}
          name="passwordConfirm"
          className="input w-full max-w-xs border border-black"
          onChange={onChange}
        />
      </div>
      <div className=" mx-auto text-center">
        <button className="btn">Create an Account!</button>
      </div>
    </form>
  );
};

export default Register;
