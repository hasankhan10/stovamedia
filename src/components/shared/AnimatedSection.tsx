// src/components/shared/AnimatedSection.tsx
'use client';

import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import type { ElementType, HTMLAttributes } from 'react';

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function AnimatedSection({ as: Tag = 'div', children, className, ...props }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const isVisible = !!entry?.isIntersecting;

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-opacity duration-1000 ease-out motion-safe:transform motion-safe:transition-all motion-safe:duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
