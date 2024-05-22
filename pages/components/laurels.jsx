import React from "react";

function Laurels() {
    return (
      <div className=" py-20 flex">
        <div className=" text-white flex-1 ml-44">
          <p className=" text-3xl">Awards & recognition</p>
          <img className=" mb-14" src="./images/spoon.png" />
          <p className=" text-6xl text-yellow-300">Our Laurels</p>
          <div className="flex items-center mt-12">
            <img className=" w-20 mr-7" src="./images/award01.png" />
            <div>
              <p className="text-yellow-300 text-xl">Bib Gourmond</p>
              <p className=" mr-56">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className="flex items-center mt-12">
            <img className=" w-20 mr-7" src="./images/award02.png" />
            <div>
              <p className="text-yellow-300 text-xl">..............</p>
              <p className=" mr-56">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className="flex items-center mt-12">
            <img className=" w-20 mr-7" src="./images/award03.png" />
            <div>
              <p className="text-yellow-300 text-xl">..............</p>
              <p className=" mr-56">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className="flex items-center mt-12">
            <img className=" w-20 mr-7" src="./images/award02.png" />
            <div>
              <p className="text-yellow-300 text-xl">...............</p>
              <p className=" mr-56">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
        <div className=" text-white flex-1 mr-44 object-contain ">
          <img src="./images/BeefSundayRoast.jpg" />
        </div>
      </div>
    );
}

export default Laurels;
