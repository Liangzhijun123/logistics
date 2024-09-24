import React from "react";

const Title = () => {
  return (
    <>
      <div className="relative mx-auto">
        {/* Image with absolute positioning */}
        <img
          src="/image/title-image.svg"
          className="w-full h-auto  object-cover object-center"
        ></img>

        {/* Text content centered on the image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-[51px]">
          <p className="font-Inter font-semibold text-[50px]">
            Welcome to MileStone Group Logistic
          </p>
          <p className="text-white font-medium font-Inter text-[24px]">
            Efficient, reliable package delivery tracking
          </p>
          <div className="flex flex-row gap-[20px]">
            <a
              href="#"
              className="w-[139px] h-[38px] flex justify-center p-1 rounded-[10px] bg-[#333333] text-white hover:bg-[#111111]"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="w-[139px] h-[38px] flex justify-center p-1 rounded-[10px] bg-[#333333] text-white hover:bg-[#111111]"
            >
              Track Packages
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
