import React from 'react';
import { ShieldHalf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <ShieldHalf className="h-6 w-6 text-white" />
            <span className="text-lg font-bold tracking-tight">DAO Community</span>
          </div>
          <p className="text-sm text-gray-400">
            Empowering the next generation of innovators and leaders.
          </p>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Documentation</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Tutorials</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Guidelines</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Community</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Discord</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Twitter</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">GitHub</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Code of Conduct</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} DAO Community. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;