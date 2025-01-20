import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import mainlogo from "../assets/Flobeuniverse.png";

const Navbar = () => {
  const [width, setWidth] = useState("100%");
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newWidth = 100 - scrollPosition / 10;
      setWidth(`${Math.max(newWidth, 80)}%`);
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Services", link: "#services" },
    { name: "For Sellers", link: "#sellers" },
    { name: "Marketplace", link: "#marketplace" },
    { name: "FAQ", link: "#faq" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex justify-center">
      <motion.div
        className="max-w-[2000px] mx-auto fixed top-0 w-full py-5 px-4 sm:px-6 lg:px-8 z-50"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div></div>
        <motion.div
          style={{ width }}
          className={`flex justify-between mx-auto h-fit rounded-full px-6 py-4 items-center transition-all duration-300 ${
            isScrolled
              ? "bg-gray-900/80 backdrop-blur-xl border border-white/10"
              : "bg-white/5 backdrop-blur-lg"
          }`}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img src={mainlogo} alt="FlobeUniverse" className="h-7" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.link}
                  className="text-white/90 hover:text-white px-2 py-1 text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#join"
              className="px-6 py-2 text-white text-sm font-medium rounded-full bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setNavOpen(!navOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {navOpen ? <FaXmark size={24} /> : <BiMenu size={24} />}
          </motion.button>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="lg:hidden fixed inset-y-0 right-0 w-full sm:w-[350px] bg-gray-800/95 opacity-80 backdrop-blur-2xl p-6 shadow-xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end">
                  <motion.button
                    onClick={() => setNavOpen(false)}
                    className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaXmark size={24} />
                  </motion.button>
                </div>

                <nav className="flex flex-col space-y-6 mt-10">
                  {links.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.link}
                      className="text-white/90 hover:text-white px-4 py-2 text-lg font-medium transition-colors"
                      whileHover={{ x: 10 }}
                      onClick={() => setNavOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-auto pb-8">
                  <motion.a
                    href="#join"
                    className="block w-full px-6 py-3 text-white text-center font-medium rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setNavOpen(false)}
                  >
                    Join Us
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Navbar;
