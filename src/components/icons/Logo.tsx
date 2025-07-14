import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';
import Image from 'next/image';

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <Image 
        src="https://scontent.fixb1-1.fna.fbcdn.net/v/t39.30808-6/496951606_122118032312829021_4712571896223912843_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vbRkCDnXTeIQ7kNvwFIACiI&_nc_oc=AdkbLaswwvzf7kWPsDJiLQp8B5cbo8KrdSGTR8pRTkHuhAbfe0HphBuM5bfGrzR74Y4&_nc_zt=23&_nc_ht=scontent.fixb1-1.fna&_nc_gid=nYZLC8s-yS5Ch34G4rueSA&oh=00_AfQUK48s2TbPKtF00GUyTi1PJ2v98BJyfK8sGwul_lG53A&oe=687B139C"
        alt="Stova Media Logo"
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