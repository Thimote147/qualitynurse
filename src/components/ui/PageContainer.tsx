import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`pt-20 sm:pt-24 min-h-screen ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;