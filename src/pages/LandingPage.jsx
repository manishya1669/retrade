import React from "react";
import service1 from '../images/service1.jpg'
import service2 from '../images/service2.jpg'
import service3 from '../images/service3.jpg'
import service4 from '../images/service4.jpg'
import service5 from '../images/service5.png'
import service6 from '../images/service6.jpg'
import arrow from '../images/arrow.png'
import LandingPageFooter from '../components/LandingPage/LandingPage_footer'

const LandingPage = () => {
  return (
  <div>
    <div className=' text-center p-10 py-10'>
      <h2 className=' text-5xl py-2 font-bold  md:text-7xl text-bold'>reTrade</h2>
      <h3 className='text-2xl py-2 md:text-3xl'>Exchange More, Spend Less: Join the Revolution on reTrade</h3>
      <p className=' text-lg py-5 leading-8 text-gray-500 md:text-xl max-w-xl mx-auto'>
      Whether you want to trade up your old items for something new, or simply make room for the things you love, our community of users offers a smart and sustainable solution. So why wait? Join <span className=" font-bold">reTrade</span> and start swapping smarter, not harder!
      </p>

      <div className=" hidden md:block">
        <h2 className=" text-2xl mt-10">
          Ready to start trading smarter, not harder?
        </h2>
        <div className=" flex mx-auto text-center justify-center">
          <p className=" text-lg py-5 leading-8 text-gray-500 md:text-lg ">
            Click below to sign-up right away!
          </p>
        <img src={arrow} className=" rotate-12 ml-5" width={200} height={50}  alt="" />
        </div>

        <button className=" text-xl ml-10 mb-10 border border-black py-3 bottom-1 right-[45%] left-[45%] absolute px-3 rounded-lg text-black hover:scale-110 transition duration-300 ease-in-ou">
          Sign-Up
        </button>
        
      </div>
    </div>

    <section className=" text-white bg-black">
      <div className=" p-2">
        <h3 className=" text-2xl py-2 mx-10">How <span className=" font-extrabold">reTrade</span> features helps you 😉</h3>
        <p className=" py-2 mx-10">
        We are a platform for customers to exchange, trade, or sell unwanted or unused items for something new. This allows customers to easily get rid of items they no longer need and get something new in return
        </p>
      </div>
      <div className=" lg:flex gap-10 p-10 mx-auto justify-center items-center">
      <div className='bg-gray-800 my-5 text-center shadow-lg p-5 rounded-xl hover:scale-110 transition duration-300 ease-in-out max-w-sm'>
        <img className='mx-auto rounded-lg' src={service1} width={100} height={100}/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>Bargain</h3>
        <p className='text-md py-2 leading-8 text-white'>
          Our website allow users to bargain on listed items to get the best value for the product and the wallet
        </p>
      </div>

      <div className='bg-gray-800 my-5 text-center shadow-lg p-5 rounded-xl hover:scale-110 transition duration-300 ease-in-out max-w-sm'>
      <img className='mx-auto rounded-lg' src={service2} width={100} height={100}/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>Simple and Clean UI</h3>
        <p className='text-md py-2 leading-8 text-white'>
          We have a very simple and clean design making it very navigable irrespective of users experience with websites
        </p>
      </div>

      <div className='bg-gray-800 my-5 text-center shadow-lg p-5 rounded-xl hover:scale-110 transition duration-300 ease-in-out max-w-sm'>
        <img className='mx-auto rounded-lg' src={service3} width={100} height={100}/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>Rating</h3>
        <p className='text-md py-2 leading-8 text-white'>
          Our website has a rating feature that allows users to rate dubious listings on the website and report the user
        </p>
      </div>
      </div>
    </section>

    <section className=" text-black bg-white">
      <div className=" p-2">
        <h3 className=" text-2xl py-2 mx-10">Advantages of using <span className=" font-extrabold">reTrade</span> ! 😉</h3>
      </div>
      <div className=" flex gap-10 p-10 mx-auto lg:justify-center items-center">
      <div className='bg-gray-200 my-5 text-center shadow-lg p-5 rounded-xl hover:scale-110 transition duration-300 ease-in-out max-w-sm'>
        <img className='mx-auto rounded-lg' src={service4} width={100} height={100}/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>Money</h3>
        <p className='text-md py-2 leading-8 text-black'>
          You can save a lot of money when u dont have to pay for stuff
        </p>
      </div>

      <div className='bg-gray-200 my-5 text-center shadow-lg p-5 rounded-xl hover:scale-110 transition duration-300 ease-in-out max-w-sm'>
        <img className='mx-auto rounded-lg' src={service5} width={100} height={100}/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>Reduces Waste</h3>
        <p className='text-md py-2 leading-8 text-black'>
        By exchanging items, customers can reduce the amount of waste that goes into landfills.
        </p>
      </div>

      <div className='bg-gray-200 my-5 text-center shadow-lg p-5 rounded-xl hover:scale-110 transition duration-300 ease-in-out max-w-sm'>
        <img className='mx-auto rounded-lg' src={service6} width={100} height={100}/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>Convenience</h3>
        <p className='text-md py-2 leading-8 text-black'>
        We provide a convenient platform for customers to exchange items.
        </p>
      </div>
      </div>
    </section>
    
    <LandingPageFooter/>
    
  </div>
  );
};

export default LandingPage;
