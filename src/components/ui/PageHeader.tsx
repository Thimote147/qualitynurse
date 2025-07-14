import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  gradient?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  description, 
  gradient = false 
}) => {
  return (
    <div className={`${
      gradient 
        ? 'bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white' 
        : 'bg-gray-50'
    } py-12 sm:py-16 lg:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {subtitle && (
            <p className={`text-sm sm:text-base font-medium mb-2 ${
              gradient ? 'text-emerald-100' : 'text-emerald-600'
            }`}>
              {subtitle}
            </p>
          )}
          
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight ${
            gradient ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h1>
          
          <div className={`w-16 sm:w-24 h-1 mx-auto mb-4 sm:mb-6 ${
            gradient 
              ? 'bg-white' 
              : 'bg-gradient-to-r from-emerald-600 to-teal-600'
          }`}></div>
          
          {description && (
            <p className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto ${
              gradient ? 'text-white/90' : 'text-gray-600'
            }`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;