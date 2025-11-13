import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    content: "CricketFanApp has completely transformed how our corporate league operates. The scoring is intuitive, and the statistics are incredible. It's like having a professional cricket management system!",
    name: "Rahul Sharma",
    role: "League Organizer",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    content: "As a cricket coach, I use CricketFanApp daily to track my players' performance. The detailed stats and analysis tools give us insights that we couldn't get anywhere else.",
    name: "Sarah Johnson",
    role: "Cricket Coach",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    content: "The fantasy cricket feature is addictive! I've connected with so many other cricket enthusiasts and the competitions make watching matches even more exciting.",
    name: "Vikram Patel",
    role: "Cricket Fan",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4
  }
];

const TestimonialCard: React.FC<TestimonialProps> = ({ content, name, role, avatar, rating }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="mb-6">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={`inline-block mr-1 ${i < rating ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-300'}`} 
          />
        ))}
      </div>
      <p className="text-neutral-700 italic mb-6 flex-grow">{content}</p>
      <div className="flex items-center">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-neutral-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = () => {
    // For mobile, show 1, for tablet show 2, for desktop show 3
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    
    const count = isMobile ? 1 : isTablet ? 2 : 3;
    const result = [];
    
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    
    return result;
  };

  return (
    <section id="testimonials" className="section bg-neutral-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Discover how CricketFanApp is changing the way cricket enthusiasts experience the game.
          </p>
        </motion.div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', damping: 20 }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary-600 scale-125' : 'bg-neutral-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-neutral-700"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-neutral-700"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;