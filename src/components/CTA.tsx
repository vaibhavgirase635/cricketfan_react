import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-r from-secondary-600 to-secondary-800 relative overflow-hidden">
      {/* Cricket ball decorations */}
      <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary-600 opacity-10"></div>
      <div className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-64 h-64 rounded-full bg-primary-600 opacity-10"></div>
      
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="md:w-7/12 mb-10 md:mb-0"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Cricket Experience?
            </h2>
            <p className="text-secondary-100 mb-8 text-lg leading-relaxed">
              Join thousands of cricket fans, players, and organizers who are already using CricketFanApp to enhance their cricket journey.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.cricketfanapp.app" className="btn bg-white text-secondary-700 hover:bg-neutral-100">
                <Download size={20} className="mr-2" />
                Download App
              </a>
              <a href="#" className="btn bg-primary-600 text-white hover:bg-primary-700">
                Learn More
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-5/12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-black/10 rounded-3xl blur-xl transform scale-95"></div>
              <img 
                src="https://images.pexels.com/photos/13059693/pexels-photo-13059693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Cricket fan celebrating" 
                className="rounded-3xl relative z-10 w-full h-auto"
              />
              <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-lg shadow-lg z-20">
                <div className="text-primary-600 font-bold text-xl">4.9</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-primary-600 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs text-neutral-500 mt-1">App Store Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;