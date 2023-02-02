import React  from "react"
import logo from "../Images/HackLogo.png"

export default function Footer() {
  
    return (
        <div  className=" bg-gray-500 text-white">
        <div className="flex h-100 w-100 p-10 gap-10 justify-around items-center">
          <div>
            <img  src={logo} width={300} height={100}  alt="logo"/>
          </div>
          <div className=" ">
          <div className="text-5xl py-5 text-center">Exchange Safely and Securely !</div>
          <div className="text-2xl max-w-xl mx-auto text-center">reTrade takes great pride in offering a safe and secure online barting experience !!</div> 
          </div>
          </div>         
        </div>
    );
}
