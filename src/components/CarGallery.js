import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Fuel, ArrowRight } from 'lucide-react';

const CarGallery = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const cars = [
    {
      id: 1,
      name: 'Baleno',
      brand: 'Maruti Suzuki',
      category: 'sedan',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10492/1753944173342/exterior-image-172.jpg?impolicy=resize&imwidth=420',
      capacity: 5,
      fuelType: 'Petrol',
      transmission: 'AMT',
      year: '2023',
      color: 'Pearl Arctic White',
      price: '₹1,400/day',
      features: ['AC', 'Power Steering', 'Music System', 'Touchscreen', 'Automatic Transmission']
    },
    {
      id: 2,
      name: 'Swift',
      brand: 'Maruti Suzuki',
      category: 'sedan',
      image: 'https://w0.peakpx.com/wallpaper/178/853/HD-wallpaper-suzuki-swift-sport-2018-red-swift-hatchback-new-cars-japanese-cars-suzuki.jpg',
      capacity: 5,
      fuelType: 'Petrol',
      transmission: 'MT',
      year: '2022',
      color: 'Fire Red',
      price: '₹1,200/day',
      features: ['AC', 'Power Steering', 'Music System', 'Central Locking']
    },
    {
      id: 3,
      name: 'Innova Crysta',
      brand: 'Toyota',
      category: 'suv',
      image: 'https://www.team-bhp.com/sites/default/files/pictures2022/innova-crysta-2.jpg',
      capacity: 7,
      fuelType: 'Diesel',
      transmission: 'MT',
      year: '2023',
      color: 'Super White',
      price: '₹2,500/day',
      features: ['AC', 'Power Steering', 'Music System', 'GPS Navigation', 'Third Row AC']
    },
    {
      id: 4,
      name: 'Fronx',
      brand: 'Maruti Suzuki',
      category: 'compact suv',
      image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/208938/fronx-exterior-right-front-three-quarter.webp?isig=0&q=80',
      capacity: 5,
      fuelType: 'Petrol',
      transmission: 'AMT',
      year: '2023',
      color: 'Nexa Blue',
      price: '₹1,600/day',
      features: ['AC', 'Power Steering', 'Music System', 'Touchscreen', 'Automatic Transmission']
    },
    {
      id: 5,
      name: 'Amaze',
      brand: 'Honda',
      category: 'sedan',
      image: 'https://i.pinimg.com/736x/d8/09/2c/d8092cd1109fafaeca9a33be558ac98e.jpg',
      capacity: 5,
      fuelType: 'Petrol',
      transmission: 'MT',
      year: '2022',
      color: 'Radiant Red Metallic',
      price: '₹1,500/day',
      features: ['AC', 'Power Steering', 'Music System', 'Touchscreen']
    },
    {
      id: 6,
      name: 'Fortuner',
      brand: 'Toyota',
      category: 'suv',
      image: 'https://media.istockphoto.com/id/1208725993/photo/toyota-fortuner.jpg?s=612x612&w=0&k=20&c=YkePcSdUy7A_fsn6-rtFVYFT5Gfl4aciSuiaRVNwj7c=',
      capacity: 7,
      fuelType: 'Diesel',
      transmission: 'MT',
      year: '2023',
      color: 'Attitude Black',
      price: '₹3,500/day',
      features: ['AC', 'Power Steering', 'Music System', 'GPS Navigation', '4WD', 'Sunroof']
    },
    {
      id: 7,
      name: 'Urban Cruiser',
      brand: 'Toyota',
      category: 'compact suv',
      image: 'https://w0.peakpx.com/wallpaper/439/983/HD-wallpaper-toyota-toyota-urban-cruiser-suv.jpg',
      capacity: 5,
      fuelType: 'Petrol',
      transmission: 'AMT',
      year: '2022',
      color: 'Urban Cruiser White',
      price: '₹1,800/day',
      features: ['AC', 'Power Steering', 'Music System', 'Touchscreen', 'Automatic Transmission']
    },
    {
      id: 8,
      name: 'Swift Dzire',
      brand: 'Maruti Suzuki',
      category: 'sedan',
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/photo_gallery/202411/dzire-130.jpg?VersionId=TYBQfnjOH0YFn6YYv1CcPpBd_VZjBE.X&size=686:*',
      capacity: 5,
      fuelType: 'Petrol',
      transmission: 'AMT',
      year: '2023',
      color: 'Premium Silver',
      price: '₹1,300/day',
      features: ['AC', 'Power Steering', 'Music System', 'Touchscreen', 'Automatic Transmission', 'Keyless Entry']
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'suv', label: 'SUV' },
    { key: 'sedan', label: 'Sedan' },
    { key: 'compact suv', label: 'Compact SUV' },
    { key: 'AMT', label: 'Automatic (AMT)' },
    { key: 'MT', label: 'Manual (MT)' }
  ];

  const filteredCars = activeFilter === 'all' 
    ? cars 
    : cars.filter(car => 
        car.category === activeFilter || car.transmission === activeFilter
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="cars" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-teal-600">Fleet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose from our wide selection of well-maintained, modern vehicles for your perfect journey
          </p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 border border-gray-200'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                variants={cardVariants}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut",
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
                className="card cursor-pointer group relative overflow-hidden smooth-hover"
                onClick={() => setSelectedCar(car)}
              >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/car-placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                <motion.div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                  whileHover={{ rotate: 180 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight size={16} className="text-teal-600" />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{car.name.replace(car.brand, '').trim()}</h3>
                <p className="text-gray-600 mb-2">{car.brand}</p>
                <div className="text-2xl font-bold text-teal-600 mb-4">{car.price}</div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{car.capacity} Seats</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel size={16} />
                    <span>{car.fuelType}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    car.transmission === 'AMT' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {car.transmission === 'AMT' ? 'Automatic (AMT)' : 'Manual (MT)'}
                  </div>
                </div>
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Car Detail Modal */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCar(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                  onError={(e) => {
                    e.target.src = '/car-placeholder.svg';
                  }}
                />
                <button
                  onClick={() => setSelectedCar(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <X size={20} className="text-gray-800" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{selectedCar.name.replace(selectedCar.brand, '').trim()}</h3>
                    <p className="text-gray-600">{selectedCar.brand}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">{selectedCar.price}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users size={20} />
                    <span>{selectedCar.capacity} Seats</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Fuel size={20} />
                    <span>{selectedCar.fuelType}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{selectedCar.year}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                    </svg>
                    <span>{selectedCar.color}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mb-6">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedCar.transmission === 'AMT' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {selectedCar.transmission === 'AMT' ? 'Automatic (AMT)' : 'Manual (MT)'}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCar.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('tel:+917994243413', '_self')}
                    className="btn-primary flex-1 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Call</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const message = `Hi, I'm interested in renting the ${selectedCar.name.replace(selectedCar.brand, '').trim()} for ${selectedCar.price}. Could you please provide more details?`;
                      const whatsappUrl = `https://wa.me/917994243413?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="btn-secondary flex-1 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Send Message</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CarGallery;
