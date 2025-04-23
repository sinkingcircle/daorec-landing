import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { StarBorder } from './ui/star-border';

const RegistrationForm: React.FC = () => {
  const [regNo, setRegNo] = useState('');
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!regNo.trim()) {
      setError('Please enter your registration number');
      return;
    }
    
    if (regNo.trim().length < 5) {
      setError('Invalid registration number format');
      return;
    }
    
    const formattedRegNo = regNo.trim().replace(/[a-zA-Z]/g, (match) => match.toUpperCase());
    window.location.href = `https://dao-rec.vercel.app/${formattedRegNo}`;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">Welcome Recruit</h2>
        <p className="text-blue-400">Enter your registration number to continue</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <StarBorder as="div" color="#60A5FA" speed="8s" className="w-full">
          <input
            type="text"
            value={regNo}
            onChange={(e) => {
              setRegNo(e.target.value);
              setError('');
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="e.g., 23BAI1080"
            className="w-full px-4 py-3 bg-transparent text-white placeholder-blue-500/60 focus:outline-none"
            aria-label="Registration Number"
          />
        </StarBorder>
        
        {error && (
          <p className="text-red-400 text-sm mt-2 animate-pulse">{error}</p>
        )}
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-white to-blue-600 rounded-[21px] blur-xl group-hover:blur-2xl transition-all duration-1000 group-hover:duration-200 animate-glow"></div>
          <StarBorder type="submit" color="#60A5FA" speed="6s" className="w-full relative">
            <div className="flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform duration-200">
              <span className="text-lg font-semibold text-blue-400 group-hover:text-blue-300">Continue</span>
              <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </StarBorder>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;