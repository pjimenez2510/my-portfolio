/**
 * GlassCard Component
 * Reusable card component with glassmorphism effect
 */

import { cn } from '@/lib/utils';
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'strong';
  hover?: boolean;
}

export function GlassCard({ 
  children, 
  className, 
  variant = 'default',
  hover = false 
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-6 transition-all duration-300',
        variant === 'default' ? 'glass' : 'glass-strong',
        hover && 'hover:scale-[1.02] hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
}

