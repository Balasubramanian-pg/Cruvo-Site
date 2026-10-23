import React, { type HTMLAttributes } from 'react';
import { useCardGlow } from '../hooks/useCardGlow';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onMouseMove, ...props }) => {
  const { handleMouseMove } = useCardGlow();

  const handleCombinedMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMouseMove(e);
    if (onMouseMove) {
      onMouseMove(e);
    }
  };

  return (
    <div
      className={`card ${className}`}
      onMouseMove={handleCombinedMouseMove}
      {...props}
    >
      {children}
    </div>
  );
};
