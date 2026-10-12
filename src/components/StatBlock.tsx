import React from 'react';
import { StatBlockProps } from '../types';

export const StatBlock: React.FC<StatBlockProps> = ({
  id,
  icon,
  value,
  label,
  className = '',
  size = 'normal',
  labelClassName = '',
}) => {
  const valueSizeClass =
    size === 'h1'
      ? 'text-3xl sm:text-4xl md:text-5xl font-bold'
      : size === 'h2'
      ? 'text-2xl sm:text-3xl md:text-4xl font-bold'
      : 'text-xl sm:text-2xl font-semibold';

  return (
    <div
      id={id}
      className={`bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left ${className}`}
    >
      {icon && <div className="mb-3">{icon}</div>}
      <div className={`text-navy-900 tracking-tight ${valueSizeClass}`}>
        {value}
      </div>
      <div className={`text-xs sm:text-sm font-medium mt-1 ${labelClassName || 'text-gray-500'}`}>
        {label}
      </div>
    </div>
  );
};
