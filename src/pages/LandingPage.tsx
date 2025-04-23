import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RegistrationForm from '../components/RegistrationForm';
import { Squares } from '../components/ui/squares';
import { StarBorder } from '../components/ui/star-border';

const LandingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-auto">
        <Squares 
          direction="diagonal"
          speed={0.3}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      <div className={`relative z-10 pointer-events-none transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="pointer-events-auto min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex flex-col pb-20">
            <div className="w-full max-w-7xl mx-auto px-4">
              <Hero />
              <div className="flex justify-center">
                <StarBorder as="div" color="white" speed="10s" className="mt-16 max-w-3xl w-full">
                  <div className="bg-black/30 backdrop-blur-sm p-8 md:p-12">
                    <RegistrationForm />
                  </div>
                </StarBorder>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;