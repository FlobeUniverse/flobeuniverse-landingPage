import React, { useEffect, useState } from "react";
import MainLogo from "../assets/Flobeuniverse.png";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [width, setWidth] = useState("100%");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newWidth = 100 - scrollPosition / 10;

      setWidth(`${Math.max(newWidth, 80)}%`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      name: "features",
      link: "#features",
    },
    {
      name: "features",
      link: "#features",
    },
    {
      name: "features",
      link: "#features",
    },
    {
      name: "features",
      link: "#features",
    },
  ];

  return (
    <div className="max-w-[2000px] mx-auto sticky top-0 w-full py-5 px-[5%] lg:px-[10%] z-50">
      <div
        style={{ width: width }}
        className="flex justify-between mx-auto h-fit rounded-full px-4 py-3 bg-white/5 backdrop-filter backdrop-blur-xl items-center"
      >
        <div className="flex items-center">
          <img src={MainLogo} alt="" />
        </div>
        <div className={`${navOpen ? "left-0" : "-left-[100%]"} lg:h-fit w-[65%] lg:text-white flex justify-between flex-col lg:flex-row fixed lg:static py-5 lg:py-0 bg-white lg:bg-transparent top-0 left-0 text-blue items-center`}>
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            {links.map((link, index) => (
              <a key={index} href={link.link} className="px-2 py-1">
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-10 lg:mt-0 flex items-center text-white">
            <a
              href=""
              className="px-6 py-2 text-nowrap rounded-full backdrop-filter backdrop-blur-md bg-blue-700 lg:bg-white/25"
            >
              Join Us
            </a>
          </div>
        </div>
        <button onClick={() => setNavOpen()} className="flex lg:hidden">
            {navOpen ? <FaXmark color="white" size={25}/> : <BiMenu color="white" size={30}/>}
            
        </button>
      </div>
    </div>
  );
};

export default Navbar;
