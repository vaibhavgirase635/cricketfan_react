import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Scoring from './components/Scoring';
import Stats from './components/Stats';
import FoundersMessage from './components/FoundersMessage';
import AppShowcase from './components/AppShowcase';
import Testimonials from './components/Testimonials';
import Tournaments from './components/Tournaments';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Scoring />
        <Stats />
        <FoundersMessage />
        <AppShowcase />
        <Testimonials />
        <Tournaments />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;