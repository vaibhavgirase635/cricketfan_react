import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Apple, PlayCircle } from 'lucide-react';

const AppShowcase: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const screens = [
    {
      src: "/cricket image 1.jpg",
      alt: "Cricket App Dashboard",
      delay: 0.2
    },
    {
      src: "/cricket image2.jpg",
      alt: "Cricket Stats Screen",
      delay: 0.4
    },
    {
      src: "/cricket image3.jpg",
      alt: "Cricket Fantasy League",
      delay: 0.6
    },
    {
      src: "/cricket image5.jpg",
      alt: "Cricket Ground",
      delay: 0.8
    }
  ];

  return (
    <section id="download" className="section bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
          >
            <div className="inline-block px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full mb-4">
              Download Now
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Cricket Like Never Before</h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Get the CricketFanApp on your phone and unlock the full potential of your cricket passion. Available for iOS and Android devices.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="https://apps.apple.com/us/app/cricketfanapp-social-score/id6755221270" className="btn bg-black text-white hover:bg-neutral-800 transition-colors">
                <Apple size={20} className="mr-2" />
                Apple Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.cricketfanapp.app" className="btn bg-black text-white hover:bg-neutral-800 transition-colors">
                <PlayCircle size={20} className="mr-2" />
                Google Play
              </a>
            </div>
            
            <div className="bg-neutral-100 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Download size={20} className="text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Free to download</h4>
                  <p className="text-sm text-neutral-600">
                    Basic features are completely free. Premium features available via subscription.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="flex justify-center lg:justify-end items-center relative h-[500px] md:h-[600px]">
              {screens.map((screen, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.7, delay: screen.delay }}
                  className="absolute"
                  style={{
                    left: `${index * 20}%`,
                    zIndex: 3 - index,
                    transform: `scale(${1 - index * 0.1}) rotate(${index * 5}deg)`
                  }}
                >
                  <div className="relative bg-black rounded-[30px] overflow-hidden border-[8px] border-neutral-800 shadow-xl">
                    <img 
                      src={screen.src} 
                      alt={screen.alt} 
                      className="w-56 h-[400px] md:w-64 md:h-[500px] object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;