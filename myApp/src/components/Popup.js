import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Popup = ({showPopup}) => {
    const closePopup = () =>{
        showPopup()
     }
  return (
    <React.Fragment>
      <main>
        <div className="relative">
          <div className="bg-white mx-2 h-60 mt-10 space-y-5 rounded shadow centered flex-col">
            <p className="text-3xl font-semibold capitalize">Thank you!</p>
            <p className="text-gray-500 px-6 text-center md:px-20">
              We have received your form. Continue to do good always!
            </p>
            <button 
             onClick={closePopup} 
            className=" bg-pink-700 w-64 h-7 shadow uppercase text-white font-bold rounded ">
              ok
            </button>
          </div>
          <div className="absolute -top-5 left-32 md:left-48">
          <IoMdCheckmarkCircle className="text-5xl text-pink-700" />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Popup;
