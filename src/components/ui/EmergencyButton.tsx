import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

interface EmergencyButtonProps {
  phone: string;
  onCall: () => void;
}

const EmergencyButton: React.FC<EmergencyButtonProps> = ({ phone, onCall }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Emergency Button */}
      <button
        onClick={onCall}
        className="hidden sm:flex fixed bottom-6 right-6 z-50 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-200 animate-pulse hover:animate-none group items-center justify-center"
        aria-label="Appel d'urgence"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Urgence: {phone}
        </span>
      </button>

      {/* Mobile Emergency Button */}
      <button
        onClick={onCall}
        className="sm:hidden fixed bottom-4 right-4 z-50 bg-red-600 text-white p-3 rounded-full shadow-xl hover:bg-red-700 transition-all duration-200 animate-pulse hover:animate-none flex items-center justify-center"
        aria-label="Appel d'urgence"
      >
        <Phone className="w-5 h-5" />
      </button>

      {/* Mobile Emergency Banner */}
      <div className="sm:hidden fixed bottom-16 left-4 right-16 z-40 bg-red-600 text-white px-3 py-2 rounded-lg shadow-lg text-xs text-center opacity-90">
        Urgence 24h/24
      </div>
    </>
  );
};

export default EmergencyButton;