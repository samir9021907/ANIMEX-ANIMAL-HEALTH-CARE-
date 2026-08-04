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
    sm: 'h-9',
    md: 'h-12 md:h-16',
    lg: 'h-20 md:h-24'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official ANIMEX Logo Image */}
      <img
        src="/images/logo image.jpg"
        alt="ANIMEX ANIMAL HEALTHCARE PRIVATE LIMITED Logo"
        className={`${logoHeights[size]} w-auto object-contain drop-shadow-md hover:scale-105 transition-transform rounded-xl`}
      />
    </div>
  );
};
