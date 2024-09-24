import React from "react";

const Title = () => {
  return (
    <>
      <div className="relative mx-auto">
        {/* Image with absolute positioning */}
        <img
          src="/image/title-image.svg"
          className="w-full md:h-auto h-[600px]  object-cover object-center"
        ></img>

        {/* Text content centered on the image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-[51px]">
          <p className="font-Inter font-semibold md:text-[50px] text-[32px] text-center">
            Welcome to MileStone Group Logistic
          </p>
          <p className="text-white font-medium font-Inter md:text-[24px] text-[18px] text-center">
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
