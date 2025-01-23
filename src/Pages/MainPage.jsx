import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Printer, ShoppingBag } from "lucide-react";
import img1 from "../assets/ImageDisplay2.png";
import Finance from "../Sections/Finance";
import Whocanuse from "../Sections/Whocanuse";
import Faq from "../Sections/Faq";
import CountUp from "react-countup";

const MainPage = () => {

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "For Print Buyers",
      description:
        "Access thousands of verified print sellers and get competitive quotes instantly",
      image: img1,
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "For Print Sellers",
      description:
        "Reach new customers and grow your business with our marketplace platform",
      image: img1,
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Easy Ordering",
      description:
        "Simple step-by-step process from design to delivery with real-time tracking",
      image: img1,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="">
        <div
          className="py-32 mx-auto px-[5%] lg:px-[15%]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${img1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="2xl:container mx-auto">
            <div className="text-center mx-auto">
              <h2 className="text-4xl lg:text-6xl bg-clip-text text-white font-bold">
                Online Printing Marketplace
              </h2>
              <p className="text-sm lg:text-base mt-5 text-slate-300 lg:max-w-[60%] mx-auto">
                Empowering millions of businesses worldwide by bringing their
                creative visions to life. Our platform enables printing presses
                to showcase and sell custom merchandise and packaging
              </p>
              <div className="mt-10 lg:w-1/2 rounded-lg px-14 py-10 mx-auto text-white">
                <h3 className="text-xl lg:text-3xl font-bold">
                  Join Our Waitlist
                </h3>
                <p className="mt-5 text-sm">
                  Be the first to be notified when we launchby joining our
                  wailist now
                </p>
                <div className="flex gap-2 justify-center mt-7 flex-wrap">
                  <input
                    type="text"
                    className="py-2 rounded-full px-4 text-black placeholder-gray-500 font-semibold w-full lg:w-fit"
                    placeholder="Enter Email"
                  />
                  <button className="text-sm px-5 py-2 bg-blue-600 rounded-full w-full lg:w-fit">
                    Join Our Waitlist
                  </button>
                </div>
              </div>
              <div className="mt-10 gap-10 flex items-center justify-center flex-wrap">
                <div className="p-6 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-400">
                  <CountUp start={0} end={1000000} duration={5} separator="," />+
                  </div>
                  <div className="text-gray-300 mt-2">Custom Products</div>
                </div>
                <div className="p-6 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-400">
                  <CountUp start={0} end={5000} duration={5} separator="," />+
                  </div>
                  <div className="text-gray-300 mt-2">Verified Sellers</div>
                </div>
                <div className="p-6 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-400">
                  <CountUp start={0} end={2000} duration={5} separator="," />+
                  </div>
                  <div className="text-gray-300 mt-2">Freelance Designers</div>
                </div>
                <div className="p-6 rounded-xl sm:col-span-2 md:col-span-1">
                  <div className="text-3xl sm:text-4xl font-bold text-pink-400">
                    Worldwide
                  </div>
                  <div className="text-gray-300 mt-2">Delivery</div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-80"></div> */}
        </div>

        {/* Features Section */}
        {/* <div className="py-20 px-[5%] lg:px-[10%]">
          <div className="2xl:container mx-auto">
            <div className="text-center mb-16 px-4">
              <h2 className="text-4xl font-bold text-white">
                Why Choose FlobeUniverse?
              </h2>
              <p className="mt-4 text-gray-300">
                Everything you need to succeed in the print industry
              </p>
            </div>

            <div className="space-y-20">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center px-4`}
                >
                  <div className="flex-1 space-y-4">
                    <div className="text-blue-400 mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Social Proof Section */}
        {/* <div className="py-20 px-[5%] lg:px-[10%]">
          <div className="2xl:container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl p-8 md:p-12"
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Trusted by Industry Leaders
                </h2>
                <div className="flex justify-center items-center gap-2 mb-6">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="max-w-4xl mx-auto">
                  <img
                    src={img1}
                    alt="Testimonial"
                    className="rounded-xl w-32 h-32 object-cover mx-auto mb-6"
                    loading="lazy"
                  />
                  <p className="text-xl md:text-2xl text-gray-300 mb-4">
                    &quot;FlobeUniverse transformed how we handle our printing
                    needs&quot;
                  </p>
                  <p className="text-gray-400">- John Smith, CEO of PrintCo</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="py-20 px-[5%] lg:px-[10%]">
          <div className="2xl:container mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Join thousands of satisfied customers and sellers on
                FlobeUniverse
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Our Waitlist
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
      <Whocanuse />
      {/* <Finance /> */}
      {/* <Faq /> */}
      <Footer />
    </>
  );
};

export default MainPage;
