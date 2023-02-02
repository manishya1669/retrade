import React from "react";
import LandingPageFooter from '../components/LandingPage/LandingPage_footer'

const LandingPage = () => {
  return (
  <div>

    <div className="max-h-full p-2 items-center h-screen">
     <div className='items-center text-center w-full p-2'>
      <h1 className="text-5xl text-[#4dc3b5]">reTrade!</h1>
      <h5 >
         It a way of dealing with something amazing
      </h5>
     </div>

    </div>
    <LandingPageFooter/>
    
  </div>
  );
};

export default LandingPage;
