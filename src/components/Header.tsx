import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">DAO Community</span>
      </div>
    </header>
  );
};

export default Header;