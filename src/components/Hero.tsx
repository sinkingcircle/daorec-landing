import React from 'react';
import { Shield, Users, Code, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Join the Future of <span className="relative">
            <span className="relative z-10">Decentralized Innovation</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-gray-800 opacity-50 z-0"></span>
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          DAO Community brings together the brightest minds to build the next generation of decentralized applications and systems.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-medium text-white mb-1">Security</h3>
              <p className="text-xs text-gray-400">Build with blockchain-level security protocols</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-medium text-white mb-1">Community</h3>
              <p className="text-xs text-gray-400">Join a thriving network of innovators</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-medium text-white mb-1">Development</h3>
              <p className="text-xs text-gray-400">Access cutting-edge tools and frameworks</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-medium text-white mb-1">Innovation</h3>
              <p className="text-xs text-gray-400">Push boundaries with emerging technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;