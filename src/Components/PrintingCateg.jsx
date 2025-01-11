//import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Package, Book, Shirt, Car, Megaphone} from 'lucide-react';

const PrintingCategories = () => {
  const categories = [
    { icon: Printer, name: 'Digital Printing', count: '2.5k+' },
    { icon: Package, name: 'Packaging', count: '1.8k+' },
    { icon: Book, name: 'Books & Magazines', count: '3k+' },
    { icon: Shirt, name: 'Apparel', count: '1.2k+' },
    { icon: Car, name: 'Business Cards', count: '5k+' },
    { icon: Megaphone, name: 'Marketing', count: '2k+' },
  ];

  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-black to-blue-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-white"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Explore Our Print Universe
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <category.icon className="w-12 h-12 text-blue-500" />
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  <p className="text-blue-400">{category.count} Products</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PrintingCategories;