import React from 'react';
import { useState } from 'react';

function Navbar_Profile() {
  const [imagehai, setImagehai]=useState(false);
  
  return (
    <div className="flex  items-end max-w-full h-13 w-17 justify-between p-4 bg-gray-200 rounded  ">
      <div className="flex items-center rounded-xl">
        { 
        imagehai?(<img src="https://via.placeholder.com/50x50" alt="Profile Avatar" className="w-10 h-10 rounded-sm" />):(
         <h3>M</h3>
        )}
        
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default Navbar_Profile;
