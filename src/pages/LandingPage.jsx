import React from "react";
import LandingPageFooter from '../components/LandingPage/LandingPage_footer'

const LandingPage = () => {
  return (
  <div>
    <div className=' text-center p-10 py-10'>
      <h2 className=' text-5xl py-2 text-teal-600 font-medium md:text-5xl text-bold'>reTrade</h2>
      <h3 className='text-2xl py-2 md:text-2xl'>Exchange More, Spend Less: Join the Revolution on reTrade</h3>
      <p className=' text-lg py-5 leading-8 text-gray-500 md:text-xl max-w-xl mx-auto'>
      Whether you want to trade up your old items for something new, or simply make room for the things you love, our community of users offers a smart and sustainable solution. So why wait? Join <span className=" text-teal-600">reTrade</span> and start swapping smarter, not harder!
      </p>

      <div>
        <h2 className=" text-2xl mt-10">
          Ready to start trading smarter, not harder?
        </h2>
        <div className=" flex mx-auto text-center justify-center">
          <p className=" text-lg py-5 leading-8 text-gray-500 md:text-xl ">
            Click below to sign-up right away!
          </p>
          <img src="../components/images/arrow.png" className="" width={200} height={200}  alt="" />
        </div>

        <button className=" text-xl ml-10 mb-10 bg-teal-600 py-3 px-4 rounded-lg text-white hover:scale-110 transition duration-300 ease-in-ou">
          Sign-Up
        </button>
        
      </div>
    </div>

    <section className=" text-white bg-black">
      <div className=" p-2">
        <h3 className=" text-2xl py-2 mx-10">How <span className=" text-teal-600">reTrade</span> features helps you 😉</h3>
      </div>
      <div className=" lg:flex gap-10 p-10 mx-auto justify-center items-center">
      <div className='bg-gray-800 my-5 text-center shadow-lg p-5 rounded-xl hover:scale-110 transition duration-300 ease-in-out max-w-sm'>
        <img className='mx-auto rounded-lg' src="../components/images/service5.png" width={100} height={100}/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>Bargain</h3>
        <p className='text-md py-2 leading-8 text-white'>
          Our website allow users to bargain on listed items to get the best value for the product and the wallet
        </p>
      </div>

      <div className='bg-gray-800 my-5 text-center shadow-lg p-5 rounded-xl hover:scale-110 transition duration-300 ease-in-out max-w-sm'>
        <img className='mx-auto rounded-lg' src='../components/images/service2.jpg' width={100} height={100}/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>Simple and Clean UI</h3>
        <p className='text-md py-2 leading-8 text-white'>
          We have a very simple and clean design making it very navigable irrespective of users experience with websites
        </p>
      </div>

      <div className='bg-gray-800 my-5 text-center shadow-lg p-5 rounded-xl hover:scale-110 transition duration-300 ease-in-out max-w-sm'>
        <img className='mx-auto rounded-lg' src="../components/images/service3.jpg" width={100} height={100}/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>Rating</h3>
        <p className='text-md py-2 leading-8 text-white'>
          Our website has a rating feature that allows users to rate dubious listings on the website and report the user
        </p>
      </div>
      </div>
    </section>

    <section className=" text-black bg-white">
      <div className=" p-2">
        <h3 className=" text-2xl py-2 mx-10">Advantages of using <span className=" text-teal-600">reTrade</span> ! 😉</h3>
      </div>
      <div className=" flex gap-10 p-10 mx-auto lg:justify-center items-center">
      <div className='bg-gray-200 my-5 text-center shadow-lg p-5 rounded-xl hover:scale-110 transition duration-300 ease-in-out max-w-sm'>
        <img className='mx-auto rounded-lg' src="../components/images/service4.jpg" width={100} height={100}/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>Money</h3>
        <p className='text-md py-2 leading-8 text-black'>
          You can save a lot of money when u dont have to pay for stuff
        </p>
      </div>

      <div className='bg-gray-200 my-5 text-center shadow-lg p-5 rounded-xl hover:scale-110 transition duration-300 ease-in-out max-w-sm'>
        <img className='mx-auto rounded-lg' src="../components/images/service5.png" width={100} height={100}/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>De-Clutering</h3>
        <p className='text-md py-2 leading-8 text-black'>
          Get rid of unwanted items by listing them here and get something useful in return
        </p>
      </div>

      <div className='bg-gray-200 my-5 text-center shadow-lg p-5 rounded-xl hover:scale-110 transition duration-300 ease-in-out max-w-sm'>
        <img className='mx-auto rounded-lg' src="../components/images/service4.jpg" width={100} height={100}/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>No Payments</h3>
        <p className='text-md py-2 leading-8 text-black'>
        there won't be problems of balance of payments crisis since money is not invovled in exchanges
        </p>
      </div>
      </div>
    </section>
    
    <LandingPageFooter/>
    
  </div>
  );
};

export default LandingPage;
