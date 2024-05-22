import React from 'react'

function Drinkcontent() {
  return (
    <div className="flex justify-between  text-white py-20">
      <div className=" flex justify-end px-48">
        <img className="flex w-96" src="./images/Applecar.jpg" />
      </div>
      <div className="flex-1 mr-44">
        <p className=" text-3xl ">Select the new flavour drink</p>
        <img src="./images/spoon.png" />
        <p className=" text-6xl text-yellow-300 mt-12">
          Find Your Drink To Enjoy
        </p>
        <p className="mt-12">
          Start your search. The Drinkaware site has a range of tools, advice
          and support to help you make better choices about drinking
        </p>
        <div className=" border-2 w-32 py-2 mt-12 border-r-2 cursor-pointer">
          <p className=" text-center">Export Menu</p>
        </div>
      </div>
    </div>
  );
}

export default Drinkcontent