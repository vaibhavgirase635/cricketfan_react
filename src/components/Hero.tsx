import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Download, Trophy, Users, BarChart3, Gamepad2 } from 'lucide-react';

const Hero: React.FC = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!phoneRef.current) return;
      
      const { left, top, width, height } = phoneRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const moveX = (e.clientX - centerX) / 50;
      const moveY = (e.clientY - centerY) / 50;
      
      phoneRef.current.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden hero-gradient relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.08)_0%,rgba(255,255,255,0)_70%)]"></div>
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full mb-6">
                Where Every Score Pays
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span>Welcome to </span>
                <span className="text-gradient">CricketFanApp</span>
              </h1>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Get real-time scores, manage tournaments, track your stats, and connect with your cricket community — all in one app. Whether you're following your favorite matches or hosting your own, CricketFanApp keeps you in the game.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#download" className="btn btn-primary">
                  <Download size={20} className="mr-2" />
                  Download App
                </a>
                <a href="#features" className="btn btn-outline">
                  Explore Features
                </a>
              </div>
              
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 mx-auto flex items-center justify-center shadow-md mb-2">
                    <Trophy className="text-secondary-600" size={24} />
                  </div>
                  <p className="text-neutral-700">Tournaments</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 mx-auto flex items-center justify-center shadow-md mb-2">
                    <BarChart3 className="text-primary-600" size={24} />
                  </div>
                  <p className="text-neutral-700">Live Scoring</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 mx-auto flex items-center justify-center shadow-md mb-2">
                    <Users className="text-secondary-600" size={24} />
                  </div>
                  <p className="text-neutral-700">Community</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 mx-auto flex items-center justify-center shadow-md mb-2">
                    <Gamepad2 className="text-primary-600" size={24} />
                  </div>
                  <p className="text-neutral-700">Earn Coins</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
              ref={phoneRef}
            >
              <div className="relative mx-auto w-64 md:w-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-[40px] blur-xl opacity-20 -z-10 transform scale-105"></div>
                
                <div className="relative bg-black rounded-[40px] overflow-hidden border-[8px] border-neutral-800 shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Cricket App Interface" 
                    className="w-full h-[500px] object-cover object-center"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 md:top-10 md:-right-10 bg-white p-3 rounded-lg shadow-lg floating">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Trophy size={20} className="text-primary-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-semibold">Tournament</p>
                    <p className="text-xs text-neutral-500">Corporate League</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 md:bottom-10 md:-left-10 bg-white p-3 rounded-lg shadow-lg floating" style={{animationDelay: "0.5s"}}>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                    <BarChart3 size={20} className="text-secondary-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-semibold">Live Stats</p>
                    <p className="text-xs text-neutral-500">Updated in real-time</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <motion.div 
            initial={{ y: -10, opacity: 0.5 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 1.5 
            }}
          >
            <a href="#features" className="text-neutral-500 hover:text-primary-600 transition-colors">
              <ArrowDownCircle size={32} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;