/**
 * Badge Component
 * Small badge for tags and labels (technologies, categories, etc.)
 */

import { cn } from '@/lib/utils';
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'glass';
  className?: string;
}

export function Badge({ children, variant = 'glass', className }: BadgeProps) {
  const variants = {
    default: 'bg-accent/20 dark:bg-accent-dark/20 text-accent dark:text-accent-dark',
    outline: 'border border-accent/30 dark:border-accent-dark/30 text-accent dark:text-accent-dark',
    glass: 'glass text-text-secondary dark:text-text-secondary',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

