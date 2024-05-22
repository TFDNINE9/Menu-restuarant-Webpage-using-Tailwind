import React from "react";

function Foodmenu() {
  return (
    <div className=" py-20">
      <div className=" text-white flex flex-col items-center ">
        <p className=" text-2xl">Delicious With Your Selection Food</p>
        <img className=" w-12" src="./images/spoon.png" />
        <p className=" text-yellow-300 text-5xl mt-11">Today's Special Dish</p>
      </div>
      <div className=" text-white flex mt-12">
        <div className=" flex-1 ml-44 mr-16">
          <p className="text-center text-3xl">Meals</p>
          <div>
            <div className=" flex justify-between">
              <p className=" text-yellow-300">Ayam Percik</p>
              <div className=" border-b w-32 h-4" />
              <p>$20</p>
            </div>
            <p className=" text-slate-300">Dish | Malaysain</p>
            <div className=" flex justify-between mt-6">
              <p className=" text-yellow-300">Beef Wellingtom</p>
              <div className=" border-b w-32 h-4" />
              <p>$18</p>
            </div>
            <p className=" text-slate-300">Dish | British</p>
          </div>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300">Baingan Bharta</p>
            <div className=" border-b w-32 h-4" />
            <p>$16</p>
          </div>
          <p className=" text-slate-300">Dish | Vegetarian | Indian</p>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300">Braised Beef Chilli</p>
            <div className=" border-b w-32 h-4" />
            <p>$22</p>
          </div>
          <p className=" text-slate-300">Dish | Beef | Mexican</p>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300">Duck Confit</p>
            <div className=" border-b w-32 h-4" />
            <p>$22</p>
          </div>
          <p className=" text-slate-300">Dish | Miscellaneous | French</p>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300">Escovitch Fish</p>
            <div className=" border-b w-32 h-4" />
            <p>$25</p>
          </div>
          <p className=" text-slate-300">Dish | Seafood | Jamaican</p>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300">Egyptian Fatteh</p>
            <div className=" border-b w-32 h-4" />
            <p>$20</p>
          </div>
          <p className=" text-slate-300">Dish | Beef | Egyptian</p>
        </div>
        <div>
          <img className=" w-96 " src="./images/gallery04.png" />
        </div>
        <div className=" flex-1 mr-44 ml-16">
          <p className="text-center text-3xl">Desserts</p>
          <div>
            <div className=" flex justify-between">
              <p className=" text-yellow-300">Apam balik</p>
              <div className=" border-b w-32 h-4" />
              <p>$10</p>
            </div>
            <p className=" text-slate-300">Piece | Malaysian</p>
            <div className=" flex justify-between mt-6">
              <p className=" text-yellow-300">Bread and Butter Pudding</p>
              <div className=" border-b w-32 h-4 mr-8" />
              <p>$12</p>
            </div>
            <p className=" text-slate-300">Piece | British</p>
          </div>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300">Dundee cake</p>
            <div className=" border-b w-32 h-4" />
            <p>$12</p>
          </div>
          <p className=" text-slate-300">Piece | British</p>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300 mr-3">White chocolate creme brulee</p>
            <div className=" border-b w-32 h-4 mr-8" />
            <p>$8</p>
          </div>
          <p className=" text-slate-300">Piece | French</p>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300">Walnut Roll Gužvara</p>
            <div className=" border-b w-32 h-4" />
            <p>$6</p>
          </div>
          <p className=" text-slate-300">Piece | Croatian</p>
          <div className=" flex justify-between mt-6">
            <p className=" text-yellow-300">Nanaimo Bars</p>
            <div className=" border-b w-32 h-4" />
            <p>$5</p>
          </div>
          <p className=" text-slate-300">Piece | Canadian</p>
        </div>
      </div>
    </div>
  );
}

export default Foodmenu;
