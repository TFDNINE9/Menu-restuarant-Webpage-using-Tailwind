import React from 'react'

function Chef_two() {
  return (
    <div className="text-white flex justify-between py-28 px-44">
      <div className="  flex-1 mr-12 flex flex-col items-end">
        <p className=" text-3xl"> Bartender's Speech</p>
        <img className="" src="./images/spoon.png" />
        <div className=" flex-col">
          <img className=" w-6 mt-16 object-contain" src="./images/quote.png" />
          <p>
            High-quality Funny Bartender Greeting Cards designed and sold by
            artists. Get up to 35% off. Shop unique cards for Birthdays,
            Anniversaries, Congratulations.
          </p>
        </div>
        <p className=" text-3xl text-yellow-300 mt-16">Jochev Kim</p>
        <p className=" ">Chef & Co-founder</p>
        <img className=" w-60 mt-16" src="./images/sign.png" />
      </div>
      <div className=" flex-1">
        <img src="./images/bartender.jpg" />
      </div>
    </div>
  );
}

export default Chef_two