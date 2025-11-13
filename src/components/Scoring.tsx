import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Target, Users, Share2, TrendingUp, Coins } from 'lucide-react';

const Scoring: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: <Zap size={24} />,
      title: 'Ball-by-ball live scoring',
      description: 'Instant updates'
    },
    {
      icon: <Target size={24} />,
      title: 'Auto-calculated stats',
      description: 'Runs, overs, and wickets'
    },
    {
      icon: <Users size={24} />,
      title: 'Easy team setup',
      description: 'Before each match'
    },
    {
      icon: <Share2 size={24} />,
      title: 'Match summaries',
      description: 'Result sharing options'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Sync scores',
      description: 'To tournaments & leaderboards'
    },
    {
      icon: <Coins size={24} />,
      title: 'Earn coins',
      description: 'For every match scored'
    }
  ];

  return (
    <section id="scoring" className="section bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full mb-4">
            Live Scoring
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Scoring</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto mb-6">
            Every ball counts — and so does every point! With CricketFanApp's smart live scoring system, you can capture every moment of the game in real time. Whether you're playing in a backyard league or a professional tournament, our scoring tools make match tracking effortless, accurate, and exciting.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Key Highlights:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center mb-4">
                  <div className="text-white">
                    {highlight.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                <p className="text-neutral-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <div className="max-w-3xl mx-auto">
            <Coins size={48} className="mx-auto mb-4" />
            <p className="text-xl md:text-2xl font-semibold mb-4">
              Plus, every match you score earns CricketFanApp Coins — rewarding scorers, players, fans and organizers for every contribution!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Scoring;
