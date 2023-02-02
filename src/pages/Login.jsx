import React from "react";

const Login = () => {
  return (
    <form action="" className=" p-5 text-center my-5">
      <div className=" flex gap-5 justify-center items-center py-3">
        <label htmlFor="usern">Username</label>
        <input type="text" id="usern" />
      </div>
      <div className=" flex gap-5 justify-center items-center py-3">
        <label htmlFor="passd">Password</label>
        <input type="text" id="passd" />
      </div>
      <div className=" mx-auto flex justify-center items-center gap-10 my-5">
        <button className="btn" type="submit">Log-In</button>
        <button className="btn">Create an Account</button>
      </div>
    </form>
  );
};

export default Login;
