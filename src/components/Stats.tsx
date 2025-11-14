import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const StatCounter: React.FC<StatProps> = ({ 
  value, 
  label, 
  prefix = '', 
  suffix = '', 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-4"
    >
      <div className="text-4xl md:text-5xl font-bold text-secondary-600 mb-2">
        {prefix}{inView ? count : 0}{suffix}
      </div>
      <div className="text-neutral-800 font-medium">{label}</div>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // ✅ state for dynamic data
  const [stats, setStats] = useState({
    active_users: 0,
    tournaments: 0,
    matches: 0,
    satisfactionRate: 0
  });

  // ✅ fetch stats from API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('https://api.cricketfanapp.com/api/cricket/all-stats', {
          headers: {
            'x-api-key': 'cricketfanapp_secret_key_2024',
            'Content-Type': 'application/json'
          }
        });
        // example response: { active_users: 51234, tournaments: 1300, matches: 86500, satisfaction_rate: 94 }
        const data = await res.json();
      setStats({
        active_users: data.users[0].active_users || 0,
        tournaments: data.tournaments[0].total_tournaments || 0,
        matches: data.matches[0].total_matches || 0,
        satisfactionRate: 95
      });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <section id="stats" className="py-20 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(26,95,122,0.4)_0%,rgba(255,107,53,0)_70%)]"></div>
      
      {/* Cricket ball decoration */}
      <div className="absolute -right-24 -top-24 w-48 h-48 opacity-10 cricket-ball-spin">
        <img src="/cricket-ball.svg" alt="Cricket ball decoration" />
      </div>
      <div className="absolute -left-16 -bottom-16 w-32 h-32 opacity-10 cricket-ball-spin" style={{ animationDuration: '8s' }}>
        <img src="/cricket-ball.svg" alt="Cricket ball decoration" />
      </div>
      
      <div className="container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 bg-white/20 text-white rounded-full mb-4">
            Performance Analytics
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stats</h2>
          <p className="text-secondary-100 max-w-3xl mx-auto mb-6">
            Because numbers tell the story of every great game. CricketFanApp gives players, teams, and fans access to detailed, real-time statistics — making it easier to analyze performance and celebrate milestones.
          </p>
          
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-12">
            <h3 className="text-xl font-semibold text-white mb-4">What You Can Track:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2 text-secondary-100">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Batting, bowling, and fielding stats for every player</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Team rankings and season leaderboards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Win/loss ratios, averages, and strike rates</span>
                </li>
              </ul>
              <ul className="space-y-2 text-secondary-100">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Tournament and match-based analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Historical records and personal bests</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-white text-lg font-medium mb-2">
            Every stat you build adds to your CricketFanApp profile — growing your legacy within the game and earning you coins for consistent performance.
          </p>
          <p className="text-secondary-100 text-lg italic">
            Because here, every score and every stat truly counts.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Our Growing Community</h3>
        </motion.div>
        
        {/* ✅ Dynamic Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-secondary">
          <StatCounter value={stats.active_users} suffix="+" label="Active Users" />
          <StatCounter value={stats.tournaments} suffix="+" label="Tournaments" />
          <StatCounter value={stats.matches} suffix="+" label="Matches Scored" />
          <StatCounter value={stats.satisfactionRate} suffix="%" label="Satisfaction Rate" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
