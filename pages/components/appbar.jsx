import React from 'react'

function Appbar() {
  return (
    <div className="bg-black text-white flex justify-between px-10 h-14 items-center">
      <h1 className="text-3xl font-bold">
        <a href="https://beginner-restaurant-bar.netlify.app/">TFDNINE Restuarant</a>
      </h1>
      <div className=" flex space-x-6">
        <p className="hover:underline cursor-pointer">Home</p>
        <p className="hover:underline cursor-pointer">Menu</p>
        <p className="hover:underline cursor-pointer">Gellary</p>
        <p className="hover:underline cursor-pointer">About</p>
        <p className="hover:underline cursor-pointer">Contect us</p>
      </div>
      <div className="flex space-x-5">
        <a href="./signin" ><p className="hover:underline cursor-pointer">Login/Register</p></a>
        <div className="border bg-white" />
       <a href="./Booktable"> <p className="hover:underline cursor-pointer">Book table</p></a>
      </div>
    </div>
  );
}

export default Appbar;