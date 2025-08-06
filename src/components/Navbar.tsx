import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white font-bold text-xl">
          AI Website
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;