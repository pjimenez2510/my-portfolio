/**
 * SectionHeading Component
 * Consistent heading style for all sections
 */

import { cn } from '@/lib/utils';
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  align = 'center',
  className 
}: SectionHeadingProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-12', alignments[align], className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary dark:text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

