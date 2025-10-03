import React from 'react';
import { motion } from 'framer-motion';
import { Car, Clock, MapPin, Phone, Shield, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Car,
      title: 'Wide Car Selection',
      description: 'Choose from a diverse fleet of well-maintained vehicles to suit your every need and preference.',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Book and access your car anytime, anywhere. Our service is available round the clock for your convenience.',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      title: 'GPS & Navigation',
      description: 'All our vehicles come equipped with advanced GPS navigation systems to ensure you never lose your way.',
      color: 'text-purple-600'
    },
    {
      icon: Phone,
      title: 'Easy Support',
      description: 'Get instant help with our dedicated customer support team available via phone, chat, or email.',
      color: 'text-orange-600'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All vehicles are regularly maintained and insured. Your safety and security are our top priorities.',
      color: 'text-red-600'
    },
    {
      icon: Zap,
      title: 'Quick Booking',
      description: 'Book your car in just a few clicks with our streamlined booking process. No lengthy paperwork required.',
      color: 'text-yellow-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-teal-600">Triviandrive?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of car rental with our innovative features and exceptional service
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }
              }}
              className="card p-8 text-center group relative overflow-hidden smooth-hover"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25 
                }}
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:shadow-lg transition-all duration-500 ease-in-out relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <feature.icon size={32} className={`${feature.color} group-hover:scale-110 transition-transform duration-500 ease-in-out relative z-10`} />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative element */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-12 h-1 bg-teal-600 mx-auto mt-6 rounded-full origin-left"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Triviandrive Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">About Triviandrive</h3>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Triviandrive is your trusted self-drive car rental service, offering unmatched flexibility and convenience for all your travel needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Car size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold">Self-Drive Experience</h4>
              <p className="text-teal-100">
                Take control of your journey with our self-drive car rental service. Drive at your own pace and explore destinations on your terms.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <MapPin size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold">Pick & Drop Service</h4>
              <p className="text-teal-100">
                Enjoy the convenience of our flexible pick-up and drop service. We'll deliver your car to your location and collect it when you're done.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Shield size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold">Clean & Hygienic Cars</h4>
              <p className="text-teal-100">
                Every vehicle in our fleet is thoroughly cleaned and sanitized. We maintain the highest standards of hygiene for your safety and comfort.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
