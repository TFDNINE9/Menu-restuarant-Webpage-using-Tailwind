import React from "react";

function Foodcontent() {
  return (
    <div className="flex justify-between  text-white py-16">
      <div className="flex-1 ml-44">
        <p className=" text-3xl ">Select the new flavour meal</p>
        <img src="./images/spoon.png" />
        <p className=" text-6xl text-yellow-300 mt-12">
          The Key To Find Dining
        </p>
        <p className="mt-12">
          Creating a fine dining atmosphere is all about the details. This goes
          well beyond music, lighting, and art on the walls. Many fine dining
        </p>
        <div className=" border-2 w-32 py-2 mt-12 cursor-pointer">
          <p className=" text-center">Export Menu</p>
        </div>
      </div>
      <div className=" flex justify-end px-48">
        <img className="flex w-96 " src="./images/welcome.png" />
      </div>
    </div>
  );
}

export default Foodcontent;
