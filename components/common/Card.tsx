
import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-sm p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
