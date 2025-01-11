import { motion } from 'framer-motion';

const FeaturedProducts = () => {
    const products = [
      {
        title: "Premium Business Cards",
        image: "/api/placeholder/300/200",
        price: "$49.99",
        rating: 4.8,
        reviews: 128,
        tags: ["Bestseller", "Premium"]
      },
      {
        title: "Custom Packaging Boxes",
        image: "/api/placeholder/300/200",
        price: "$89.99",
        rating: 4.9,
        reviews: 89,
        tags: ["New", "Eco-friendly"]
      },
      {
        title: "Art Print Collection",
        image: "/api/placeholder/300/200",
        price: "$129.99",
        rating: 5.0,
        reviews: 245,
        tags: ["Featured", "Limited"]
      },
      {
        title: "Marketing Materials Bundle",
        image: "/api/placeholder/300/200",
        price: "$199.99",
        rating: 4.7,
        reviews: 167,
        tags: ["Popular", "Bundle"]
      }
    ];
  
    return (
      <motion.section 
        className="py-20 bg-gradient-to-b from-black to-blue-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-white">
              Trending Products
            </h2>
            <p className="text-gray-300 mt-4">Discover our most popular printing solutions</p>
          </motion.div>
  
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/80 text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold text-blue-400">{product.price}</p>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-white">{product.rating}</span>
                        </div>
                        <p className="text-sm text-gray-400">{product.reviews} reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  };

  export default FeaturedProducts;