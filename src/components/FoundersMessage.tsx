import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, X } from 'lucide-react';

const FoundersMessage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,53,0.05)_0%,rgba(255,255,255,0)_70%)]"></div>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full mb-4">
            From Our Founder
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We Built CricketFanApp</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Our journey to revolutionize the cricket experience for fans, players, and organizers worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <img
                src="https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg"
                alt="Founder's Message Video Thumbnail" 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setShowVideo(true)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
              >
                <Play size={24} className="text-secondary-600 ml-1" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="space-y-6">
              <blockquote className="text-lg text-neutral-700 leading-relaxed">
                "Cricket has always been more than just a sport—it's a passion that brings people together. With CricketFanApp, we're creating a platform that celebrates this passion and makes cricket more accessible and enjoyable for everyone involved."
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src="/ashish.jpeg" 
                  alt="Founder" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Ashish</h4>
                  <p className="text-neutral-600">Founder & CEO</p>
                </div>
              </div>

              <div className="space-y-4 text-neutral-600">
                <p>
                  Our mission is to empower cricket enthusiasts with tools that enhance their experience, whether they're playing, organizing, or following the sport.
                </p>
                <p>
                  We're building more than just an app—we're creating a community where cricket fans can connect, compete, and celebrate their love for the game.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-secondary-500 transition-colors"
            >
              <X size={24} />
            </button>
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default FoundersMessage;