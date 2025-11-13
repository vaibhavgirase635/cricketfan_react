import React from 'react';
import Logo from './Logo';
import { 
  Mail, 
  Twitter, 
  Instagram, 
  Youtube
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-neutral-400 mb-4">
              The ultimate cricket platform for fans, players, and organizers, bringing all aspects of cricket into one comprehensive app.
            </p>
            <p className="text-primary-500 font-semibold mb-6">
              WHERE EVERY SCORE PAYS!
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/cricketfanapp" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/cricketfanapp/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@cricketfanapp" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://www.youtube.com/@cricketfanapplive" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-neutral-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#tournaments" className="text-neutral-400 hover:text-white transition-colors">Tournaments</a>
              </li>
              <li>
                <a href="#testimonials" className="text-neutral-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <a href="#scoring" className="text-neutral-400 hover:text-white transition-colors">Live Scoring</a>
              </li>
              <li>
                <a href="#features-profiles" className="text-neutral-400 hover:text-white transition-colors">Player Profiles</a>
              </li>
              <li>
                <a href="#tournaments" className="text-neutral-400 hover:text-white transition-colors">Tournaments</a>
              </li>
              <li>
                <a href="#features-community" className="text-neutral-400 hover:text-white transition-colors">Community Feed</a>
              </li>
              <li>
                <a href="#features-coins" className="text-neutral-400 hover:text-white transition-colors">Coin System</a>
              </li>
              <li>
                <a href="#features-coins" className="text-neutral-400 hover:text-white transition-colors">Fantasy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-neutral-400 font-semibold text-lg mb-4">Contact Us</h4>
            <p className="text-neutral-400 mb-4 text-sm">
              We'd love to hear from you! Whether you have a question, want to report an issue, suggest a feature, or discuss partnerships.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="text-primary-500 mr-3 flex-shrink-0" />
                <a href="mailto:Social@cricketfanapp.com" className="text-neutral-400 hover:text-white transition-colors">Social@cricketfanapp.com</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 mr-3 flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500 mr-3 flex-shrink-0"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                <a href="https://cricketfanapp.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">www.cricketfanapp.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CricketFanApp. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="/privacy" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="/rules" className="hover:text-neutral-300 transition-colors">Platform Rules</a>
          </div>
        </div>
        <div className='text-center text-neutral-500'>
          <h4 className="text-neutral-400 font-semibold text-lg mb-2 mt-6">DISCLAIMER</h4>
          <ul>
            <li>CricketFanApp is a social and fantasy cricket platform for fan engagement and entertainment.</li>
            <li>It is not affiliated with any official cricket boards, tournaments, or governing bodies.</li>
            <li>The Fantasy Cricket feature is for fun only, not gambling.</li>
            <li>Coins and marketplace items have no cash value and cannot be withdrawn as real money.</li>
            <li>The In-App Market operates within CricketFanApp only; all redemptions are virtual and voluntary.</li>
            <li>User-generated content represents individual opinions, not official CricketFanApp statements.</li>
            <li>CricketFanApp is not liable for user behavior, misinformation, or technical issues.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;