import React from "react";
import image1 from "../assets/Image1.png";
import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";
import image4 from "../assets/Image4.png";
import image5 from "../assets/Image5.png";
import image6 from "../assets/Image6.png";
import image7 from "../assets/Image7.png";
import { div } from "framer-motion/client";

const Gallery = () => {
  const images = [
    [image1, image2],
    [image3, image4, image5],
    [image6, image7],
  ];
  return (
    <div className="px-[5%] lg:px-[15%] py-16">
      <div className="2xl:container mx-auto text-white">
        <h1 className="text-center text-5xl lg:text-7xl font-bold">Gallery</h1>
        <p className="text-center mt-5 text-lg">
          Everything you need to success in the print industry
        </p>
        <div className="flex justify-center">
          <div className="flex gap-3 mt-14 h-[26rem] lg:h-[50rem]">
            <div className="grid grid-rows-2 gap-3">
              {images[0].map((image, index) => (
                <div
                  key={index}
                  className="w-[6rem] lg:w-[23rem] rounded-xl"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              ))}
            </div>
            <div className="grid grid-row-3 gap-3">
              {images[1].map((image, index) => (
                <div
                  key={index}
                  className="row-span-1 w-[6rem] lg:w-[23rem] rounded-xl"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              ))}
            </div>
            <div className="grid grid-rows-2 gap-3">
              {images[2].map((image, index) => (
                <div
                  key={index}
                  className="w-[6rem] lg:w-[23rem] rounded-xl"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
