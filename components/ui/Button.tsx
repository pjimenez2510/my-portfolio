/**
 * Button Component
 * Reusable button with multiple variants
 */

import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-accent dark:bg-accent-dark text-white hover:bg-accent/90 dark:hover:bg-accent-dark/90 focus:ring-accent dark:focus:ring-accent-dark shadow-md',
    secondary: 'glass border-2 border-accent/30 dark:border-accent-dark/20 text-text-primary dark:text-text-primary-dark hover:bg-accent/10 dark:hover:bg-accent-dark/10 hover:border-accent/50',
    ghost: 'text-text-primary dark:text-text-primary-dark hover:bg-accent/10 dark:hover:bg-accent-dark/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

