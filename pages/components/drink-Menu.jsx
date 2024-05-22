import React from "react";

function Drinkmenu() {
  return (
    <div className=" py-20">
      <div className=" text-white flex flex-col items-center ">
        <p className=" text-2xl">Menu That Fits You Palatte</p>
        <img className=" w-12" src="./images/spoon.png" />
        <p className=" text-yellow-300 text-5xl mt-11">Today's Special Drink</p>
      </div>
      <div className=" text-white flex mt-12">
        <div className=" flex-1 ml-44 mr-16">
          <p className="text-center text-3xl">Wine & Beer</p>
          <div>
            <div className=" flex justify-between">
              <p className=" text-yellow-300">Chapel Hill Shiraz</p>
              <div className=" border-b w-32 h-4 mr-3" />
              <p>$56</p>
            </div>
            <p className=" text-slate-300">AU | Bottle</p>
            <div className=" flex justify-between mt-6">
              <p className=" text-yellow-300">Catena Malbee</p>
              <div className=" border-b w-32 h-4 mr-3" />
              <p>$59</p>
            </div>
            <p className=" text-slate-300">AU | Bottle</p>
          </div>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300">La Vieillw Rose</p>
            <div className=" border-b w-32 h-4 mr-3" />
            <p>$44</p>
          </div>
          <p className=" text-slate-300">FR | 750 ml</p>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300">Rhino Pale Ale</p>
            <div className=" border-b w-32 h-4 mr-3" />
            <p>$31</p>
          </div>
          <p className=" text-slate-300">CA | 750 ml</p>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300 mr-">Irish Guinness</p>
            <div className=" border-b w-28 h-4 mr-3" />
            <p className=" ">$26</p>
          </div>
          <p className=" text-slate-300">IE | 750 ml</p>
        </div>
        <div>
          <img className=" w-96 " src="./images/menu.png" />
        </div>
        <div className=" flex-1 mr-44 ml-16">
          <p className="text-center text-3xl">Cocktails</p>
          <div>
            <div className=" flex justify-between">
              <p className=" text-yellow-300">Aperol Sprtiz</p>
              <div className=" border-b w-32 h-4" />
              <p>$20</p>
            </div>
            <p className=" text-slate-300">
              Aperol | Villa Marchesi prosecco | soda | 30 ml
            </p>
            <div className=" flex justify-between mt-6">
              <p className=" text-yellow-300">Dark 'N' Stormy</p>
              <div className=" border-b w-32 h-4 mr-8" />
              <p>$16</p>
            </div>
            <p className=" text-slate-300">
              Dark rum | Ginger beer | Slice of lime
            </p>
          </div>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300">Old Fashioned</p>
            <div className=" border-b w-32 h-4 mr-3" />
            <p>$31</p>
          </div>
          <p className=" text-slate-300">
            Bourbon | Brown sugar | Angostura Bitters
          </p>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300 mr-3">Negroni</p>
            <div className=" border-b w-32 h-4 mr-8" />
            <p>$26</p>
          </div>
          <p className=" text-slate-300">
            Gin | Sweet Vermouth | Campari | Orange garnish
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Drinkmenu;
