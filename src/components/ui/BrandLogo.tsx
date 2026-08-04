import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const logoHeights = {
    sm: 'h-8',
    md: 'h-11 md:h-14',
    lg: 'h-16 md:h-20'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Uploaded ANIMEX High-Res Logo Image */}
      <img
        src="/images/logo.png"
        alt="ANIMEX ANIMAL HEALTHCARE PRIVATE LIMITED Logo"
        className={`${logoHeights[size]} w-auto object-contain drop-shadow-md hover:scale-105 transition-transform`}
      />
    </div>
  );
};
