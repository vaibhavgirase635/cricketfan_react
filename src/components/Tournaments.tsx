import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Users, Calendar, MapPin } from 'lucide-react';

interface TournamentProps {
  title: string;
  teams: number;
  date: string;
  location: string;
  image: string;
  delay: number;
}

const TournamentCard: React.FC<TournamentProps> = ({ 
  title, 
  teams, 
  date, 
  location, 
  image,
  delay 
}) => {
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
      className="card overflow-hidden group card-hover-effect"
    >
      <div className="relative h-48 overflow-hidden rounded-xl -mt-6 -mx-6 mb-6">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="bg-secondary-600 text-white text-xs py-1 px-3 rounded-full">
            Featured
          </span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary-600 transition-colors">{title}</h3>
      
      <div className="space-y-2 text-sm text-neutral-600 mb-4">
        <div className="flex items-center">
          <Users size={16} className="mr-2 text-secondary-600" />
          <span>{teams} Teams</span>
        </div>
        <div className="flex items-center">
          <Calendar size={16} className="mr-2 text-secondary-600" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <MapPin size={16} className="mr-2 text-secondary-600" />
          <span>{location}</span>
        </div>
      </div>
      
      <button className="text-secondary-600 font-medium hover:text-secondary-700 transition-colors flex items-center">
        <span>View Details</span>
        <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </motion.div>
  );
};

const Tournaments: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [tournaments, setTournaments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await fetch('https://api.cricketfanapp.com/api/cricket/tournaments', {
          headers: {
            'x-api-key': 'cricketfanapp_secret_key_2024',
            'Content-Type': 'application/json'
          }
        });
        
        if (response.ok) {
          const result = await response.json();
          // The API returns data nested in a 'data' property
          // Take only first 3 tournaments
          if (result.data && Array.isArray(result.data)) {
            setTournaments(result.data.slice(0, 3));
          }
        }
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  return (
    <section id="tournaments" className="section bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full mb-4">
            Featured Tournaments
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tournaments</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto mb-8">
            Whether you're hosting a local game or competing in a league, CricketFanApp makes tournament management simple and exciting.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-secondary-600">For Organizers:</h3>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Create and customize tournaments with ease.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Add teams, fixtures, and live scores.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Track standings, leaderboards, and player stats automatically.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-secondary-600">For Players & Fans:</h3>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Join and follow your favorite tournaments in real time.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Earn coins for participation and performance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span>Share and celebrate every win with your community.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-neutral-700 font-medium text-lg">
            From street matches to full leagues — your tournament, your rules, your platform.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-secondary-600"></div>
            <p className="mt-4 text-neutral-600">Loading tournaments...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((tournament, index) => (
              <TournamentCard
                key={tournament.id || index}
                title={tournament.name}
                teams={tournament.max_teams || 0}
                date={`${new Date(tournament.start_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${new Date(tournament.end_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`}
                location={tournament.location}
                image={tournament.tournament_logo ? `https://api.cricketfanapp.com/${tournament.tournament_logo}` : '/tournament logo1.jpg'}
                delay={index}
              />
            ))}
          </div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a href="#" className="btn btn-outline inline-flex items-center">
            <Trophy size={18} className="mr-2" />
            View All Tournaments
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Tournaments;