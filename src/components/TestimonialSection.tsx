
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote as QuoteIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marcus T.",
    location: "Texas, USA",
    rating: 5,
    text: "Honestly didn't think this would work for me, but wow… I followed the steps, used the tools Alyssa recommended, and boom — first product up, 3K views in 10 days. Just hit ₹10,000 in sales and I'm getting consistent orders. Wild.",
    image: "https://i.postimg.cc/T1cV6TWF/86061fc3-b51c-44cf-8cf3-08ea2c5f5fe6.jpg",
    verified: true
  },
  {
    id: 2,
    name: "David M.",
    location: "California, USA", 
    rating: 5,
    text: "I've always wanted to start an online business but never knew where to start. This pack made it stupid simple. AI does 90% of the work. I still can't believe I'm launching products weekly and it barely takes me 2 hours a week.",
    image: "https://i.postimg.cc/Qt1gfQNX/9febbacf-257a-4d1f-9aef-ef6f77f92674.jpg",
    verified: true
  },
  {
    id: 3,
    name: "Mike R.",
    location: "New York, USA",
    rating: 5,
    text: "After surgery, I had so much downtime and wanted to try something new. This was perfect. I didn't even need any upfront investment. Now I've got products selling automatically and even made ₹17,400 last week in digital sales. Grateful, seriously.",
    image: "https://i.postimg.cc/8cGR97sL/b7f8d311-bb5a-463a-82aa-8aa48128c735.jpg",
    verified: true
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-lg p-5 shadow-md border border-gray-700 flex flex-col h-full" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: index * 0.2 }} 
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1)" }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
          <p className="text-xs text-gray-400">{testimonial.location}</p>
        </div>
        {testimonial.verified && (
          <div className="ml-auto px-2 py-1 rounded-full flex items-center bg-yellow-300">
            <span className="font-bold text-sm text-zinc-950">✓ Verified Creator</span>
          </div>
        )}
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < 5 ? 'text-gray-400 fill-gray-400' : 'text-gray-600'}`} />
        ))}
      </div>
      
      <div className="relative flex-1">
        <QuoteIcon className="absolute top-0 left-0 w-6 h-6 text-gray-600 opacity-50 -translate-x-2 -translate-y-1" />
        <p className="text-sm text-gray-300 pl-2 italic">
          {testimonial.text}
        </p>
      </div>
    </motion.div>
  );
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full py-8 bg-zinc-950">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6 px-6">
          <motion.h2 
            className="text-xl font-bold text-white mb-2" 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            See How Real People Are Building Passive Income with the LaunchPad Pro Pack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="text-gray-400 text-xs flex items-center justify-center gap-1"
          >
            <Star size={14} className="text-yellow-400" />
            Rated 4.8/5 by 1,300+ happy creators
          </motion.p>
        </div>
        
        <div className="px-4 space-y-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center mt-6" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link 
            to="/reviews" 
            className="text-gray-400 font-semibold text-sm flex items-center px-4 py-2 border border-gray-600 rounded-full hover:bg-gray-700 hover:text-white transition-colors"
          >
            See all reviews
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
