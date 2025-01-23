import React from "react";
import whocanuse from "../Data/whocanuse";
import img1 from "../assets/ImageDisplay2.png";

const Whocanuse = () => {
  return (
    <div className="px-[5%] lg:px-[15%]">
      <div className="2xl:container mx-auto text-center py-12 lg:py-32 text-white">
        <div>
          <h3 className="text-4xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 py-3 px-3 to-white">
            Who Can Use FlobeUniverse?
          </h3>
          <p className="text-sm lg:text-base mt-2 lg:max-w-[50%] mx-auto">
            Bringing everyone together for a seamless printing and design
            experience!
          </p>
        </div>
        <div className="my-20">
          {whocanuse.map((who, index) => (
            <div
              className={`${
                index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } ${index > 0 && "mt-32"} flex flex-col gap-5`}
            >
              <div className="lg:w-1/2">
                <div className="flex gap-1">
                  <code className="mt-auto text-2xl">{index + 1}.</code>
                  <p className="text-3xl lg:text-4xl font-bold">{who.name}</p>
                </div>

                <p className="text-start mt-5 text-lg">{who.description}</p>
              </div>
              <div className=" backdrop-blur-2xl lg:w-1/2 rounded-lg overflow-hidden ">
                <img src={img1} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whocanuse;
