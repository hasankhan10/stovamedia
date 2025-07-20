import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';
import Image from 'next/image';

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <Image 
        src="/stovalogo.jpg"
        alt="Stova Media company logo"
        width={32}
        height={32}
        className="rounded-full"
      />
      <div className="text-2xl font-bold font-headline tracking-tighter">
        <span className="text-primary">Stova</span><span className="text-accent">Media</span>
      </div>
    </div>
  );
}
