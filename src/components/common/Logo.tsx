import React from 'react';
import { Sofa } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ scrolled = false }) => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Sofa className={`w-8 h-8 ${scrolled ? 'text-amber-700' : 'text-amber-700'}`} />
      <div className="flex flex-col">
        <span className={`font-bold text-xl leading-tight ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
          GP Modular
        </span>
        <span className={`text-xs leading-tight ${scrolled ? 'text-gray-600' : 'text-gray-600'}`}>
          Premium Furniture
        </span>
      </div>
    </Link>
  );
};

export default Logo;