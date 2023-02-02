import React from "react";

const Register = () => {
  return(
    <div>
      <div>
        <form action="">
           <div className=" flex gap-10 justify-center items-center my-5">
            <label htmlFor="Email">Email</label>
            <input id="Email" type="email" placeholder="" className="input w-full max-w-xs border border-black" />
           </div>
           <div className=" flex gap-4 justify-center items-center my-5">
            <label htmlFor="passwd">Password</label>
            <input id="passwd" type="text" placeholder="" className="input w-full max-w-xs border border-black" />
           </div>
           <div className=" flex gap-4 justify-center items-center my-5">
            <label htmlFor="cpasswd">Confirm Password</label>
            <input id="cpasswd" type="text" placeholder="" className="input w-full max-w-xs border border-black" />
           </div>
           <div className=" mx-auto text-center">
            <button className="btn">Create an Account!</button>
           </div>
        </form>
      </div>
    </div>
  )
};

export default Register;
