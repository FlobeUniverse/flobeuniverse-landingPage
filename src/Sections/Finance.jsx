import React from "react";
import img1 from "../assets/ImageDisplay2.png";
import { Link } from "react-router-dom";

const Finance = () => {
  return (
    <div className="px-[5%] lg:px-[15%] py-16 bg-[#0f56a1]">
      <div className="2xl:container mx-auto flex flex-col-reverse lg:flex-row gap-10">
        <div className="lg:w-[60%] rounded-lg overflow-hidden">
          <img src={img1} alt="" />
        </div>
        <div className="lg:w-[40%]">
          <div className="flex py-2 text-white justify-center border">
            *Images Of Partnerships*
          </div>
          <div>
            <p className="text-4xl font-semibold text-white mt-5">
              Monitor your finance as a designer or printer and watch your
              business grow
            </p>
            <div className="mt-10">
              <Link className="px-4 py-2 text-lg bg-white/5 backdrop-filter backdrop-blur-xl rounded-full text-white">
                Join Waitlist
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
