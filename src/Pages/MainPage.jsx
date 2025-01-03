import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import img1 from "../assets/ImageDisplay2.png";
import whocanuse from "../Data/whocanuse";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-[5%] lg:px-[10%]">
        <div className="2xl:container pt-10 lg:pt-20 mx-auto">
          <div className="text-center mx-auto">
            <h2 className="text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 py-3 px-3 to-white font-bold">
              Bringing Dreams To Life
            </h2>
            <p className="text-sm lg:text-base mt-5 text-slate-300 lg:max-w-[60%] mx-auto">
              Online printing marketplace empowering millions of businesses to
              turn dreams into reality through marketing materials, packaging
              and promotional products.
            </p>
            <div className="mt-10">
              <Link className="py-3 content-center items-center flex w-fit mx-auto px-8 rounded-full bg-white/5 backdrop-filter backdrop-blur-xl text-white">
                Join Our Waitlist
              </Link>
            </div>
          </div>
          <div className="mt-20">
            <div className="lg:max-w-[60%] mx-auto rounded-lg overflow-hidden">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="text-center py-12 lg:py-32 text-white">
            <div>
              <h3 className="text-4xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 py-3 px-3 to-white">
                Who Can Use FlobeUniverse?
              </h3>
              <p className="text-sm mt-2 lg:max-w-[50%] mx-auto">
                Bringing everyone together for a seamless printing and design
                experience!
              </p>
            </div>
            <div className="py-10 mt-20">
              {whocanuse.map((who, index) => (
                <div
                  className={`${
                    index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } ${index > 0 && "mt-20"} flex flex-col gap-5`}
                >
                  <div className="lg:w-1/2">
                    <div className="flex gap-1">
                      <code className="mt-auto text-2xl">{index + 1}.</code>
                      <p className="text-4xl font-semibold">{who.name}</p>
                    </div>

                    <p className="text-start mt-5 text-lg">{who.description}</p>
                  </div>
                  <div className="lg:w-1/2 rounded-lg overflow-hidden ">
                    <img src={img1} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
