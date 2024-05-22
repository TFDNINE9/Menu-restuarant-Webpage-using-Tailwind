import React from "react";

function Chef_one() {
  return (
    <div className="text-white flex justify-between py-44 px-44">
          <div className=" flex-1">
              <img src="./images/chef.png"/>
      </div>
      <div className="  flex-1 ml-12">
      <p className=" text-3xl"> Chef's Word</p>
              <img className="" src="./images/spoon.png" />
              <div className=" flex-col">
                  <img className=" w-6 mt-16" src="./images/quote.png"/>
                  <p>
                      
        quote Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
        sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
        sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
        lectus eu. Congue iaculis integer curabitur semper sit nunc.
                  </p>
                  </div>
      <p className=" text-3xl text-yellow-300 mt-16">Kevin Luo</p>
      <p className=" ">Chef & Co-founder</p>
              <img className=" w-60 mt-16" src="./images/sign.png" />
              </div>
    </div>
  );
}

export default Chef_one;
