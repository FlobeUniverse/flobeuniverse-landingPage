import React, { useState } from "react";
import FAQ from "../Data/Faq";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Faq = () => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(null);
  return (
    <div className="py-20 px-[5%] lg:px-[15%]">
      <div className="2xl:container mx-auto">
        <div className="text-white text-center">
          <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-2">
            Get quick answers to the most common questions about our platform.
          </p>
        </div>
        <div className="divide-y mx-auto mt-10 w-full lg:w-[70%] bg-white/5 backdrop-filter backdrop-blur-xl text-white p-5 rounded-lg">
          {FAQ.map((faq, index) => (
            <div
              onClick={() =>
                setIsQuestionOpen((prevTab) =>
                  prevTab === index ? null : index
                )
              }
              key={index}
              className="py-2 cursor-pointer"
            >
              <div className="flex items-center justify-between w-full p-2">
                <h3 className="text-lg">{faq.question}</h3>
                <div className="">
                  {isQuestionOpen === index ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </div>

              {isQuestionOpen === index && <p className="p-2 bg-[#00152A] rounded-lg">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
