import { motion } from 'framer-motion';

const TestimonialSlider = () => {
    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "Creative Director",
        company: "Design Studio Co.",
        image: "/api/placeholder/100/100",
        content: "FlobeUniverse transformed our printing process. The quality and turnaround time are exceptional!"
      },
      {
        name: "Michael Chen",
        role: "Small Business Owner",
        company: "Artisan Prints",
        image: "/api/placeholder/100/100",
        content: "As a seller, I've found an amazing community of clients who value quality printing."
      },
      {
        name: "Emma Davis",
        role: "Marketing Manager",
        company: "Tech Innovators",
        image: "/api/placeholder/100/100",
        content: "The platform's variety of options and reliable service keep us coming back."
      }
    ];
  
    return (
      <motion.section 
        className="py-20 bg-gradient-to-b from-blue-950 to-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-white"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            What Our Community Says
          </motion.h2>
  
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10 }}
              >
                <div className="flex flex-col space-y-4">
                  <p className="text-gray-300 italic">&quot;{testimonial.content}&quot;</p>
                  <div className="flex items-center space-x-4 mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-blue-400">{testimonial.company}</p>
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

  export default TestimonialSlider;