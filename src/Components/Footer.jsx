//import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const exploreLinks = [
  { label: 'Print Services', href: '#' },
  { label: 'For Sellers', href: '#' },
  { label: 'Marketplace', href: '#' },
];

const supportLinks = [
  { label: 'Help Center', href: '#' },
  { label: 'Print Guidelines', href: '#' },
  { label: 'Quality Standards', href: '#' },
];

const socialIcons = [
  { Icon: Instagram, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Facebook, href: '#' },
  { Icon: Mail, href: '#' },
];

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      className="w-full  relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="mx-auto px-4 sm:px-6 lg:px-[5%] py-16 relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          variants={containerVariants}
        >
          {/* Brand Section */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              FlobeUniverse
            </motion.h3>
            <motion.p 
              className="text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              Revolutionizing the printing industry through innovation and connectivity.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-lg font-medium text-white">Discover</h4>
            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <motion.li key={link.label} variants={itemVariants}>
                  <motion.a
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-lg font-medium text-white">Support</h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <motion.li key={link.label} variants={itemVariants}>
                  <motion.a
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-lg font-medium text-white">Join Our Network</h4>
            <form className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-full focus:border-blue-500 focus:ring-blue-500"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Subscribe
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/10"
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <motion.div 
              className="text-sm text-gray-400"
              variants={itemVariants}
            >
              © 2025 FlobeUniverse. All rights reserved.
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-8"
              variants={itemVariants}
            >
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;