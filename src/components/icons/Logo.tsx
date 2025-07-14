import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-2xl font-bold font-headline tracking-tighter", className)} {...props}>
      <span className="text-primary">Stova</span><span className="text-accent">Media</span>
    </div>
  );
}
