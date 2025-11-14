import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  User, 
  Trophy, 
  MessageCircle,
  Bell,
  TrendingUp,
  Coins,
  Target
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="feature-card group"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Live Scoring',
      description: 'Follow every ball, boundary, and wicket with instant updates and stats.',
      id: 'features-scoring'
    },
    {
      icon: <User size={24} />,
      title: 'Player Profiles',
      description: 'Track your performance, records, and rankings as you play or follow.',
      id: 'features-profiles'
    },
    {
      icon: <Trophy size={24} />,
      title: 'Tournaments',
      description: 'Create, manage, and join tournaments effortlessly with real-time leaderboards.',
      id: 'features-tournaments'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Community Feed',
      description: 'Share posts, celebrate wins, and connect with fans and players worldwide.',
      id: 'features-community'
    },
    {
      icon: <Bell size={24} />,
      title: 'Notifications',
      description: 'Stay in the loop with match alerts, schedule reminders, and player achievements.',
      id: 'features-notifications'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Match Highlights',
      description: 'Catch up on results, insights, top performers, and post-match recaps.',
      id: 'features-highlights'
    },
    {
      icon: <Coins size={24} />,
      title: 'Coin System',
      description: 'Earn coins for your activity — playing, scoring, watching, or engaging. Redeem in the Market for exclusive rewards and cricket-themed goodies.',
      id: 'features-coins'
    },
    {
      icon: <Target size={24} />,
      title: 'Fantasy Cricket',
      description: 'The Fantasy Cricket feature is available only inside the app. It is purely for fun and engagement — no real money or betting is involved.',
      id: 'features-fantasy'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="section bg-neutral-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full mb-4">
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            CricketFanApp brings every cricket experience together — live action, competition, rewards, and community — all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;