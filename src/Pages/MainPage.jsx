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
import Gallery from "../Sections/Gallery.jsx";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Input cannot be Empty!");
      return;
    }

    try {
      axios.post("https://sheetdb.io/api/v1/vzndo8aksw7y1", {
        Email: email,
      });
      toast.success("Mail sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send mail. Please check your input.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="">
        <div
          id="hero"
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
              <div className="mt-10 lg:w-2/3 rounded-lg px-14 py-10 mx-auto text-white">
                <h3 className="text-xl lg:text-3xl font-bold">
                  Join Our Waitlist
                </h3>
                <p className="mt-5 text-sm">
                  Be the first to be notified when we launchby joining our
                  wailist now
                </p>
                <div>
                  <form
                    onSubmit={handleSubmit}
                    className="flex gap-2 justify-center mt-7 flex-wrap"
                  >
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      className="py-2 rounded-full text-lg px-4 text-black placeholder-gray-500 w-full lg:w-fit"
                      placeholder="Enter Email"
                      required
                    />
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="font-semibold text-sm px-5 py-2 bg-blue-600 rounded-full w-full lg:w-fit"
                    >
                      Join Our Waitlist
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-10 gap-10 flex items-center justify-center flex-wrap">
                <div className="p-6 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-400">
                    <CountUp
                      start={0}
                      end={1000000}
                      duration={5}
                      separator=","
                    />
                    +
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
        <Gallery />
        {/* <Whocanuse /> */}

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
              <motion.a
                href="#hero"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Our Waitlist
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <Finance /> */}
      {/* <Faq /> */}
      <Footer />
    </>
  );
};

export default MainPage;
