"use client";

import { useEffect, useRef, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import type LocomotiveScroll from 'locomotive-scroll';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!containerRef.current) return;

    (async () => {
        try {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            
            const scroll = new LocomotiveScroll({
                el: containerRef.current!,
                smooth: true,
                lerp: 0.08,
            });

            scrollRef.current = scroll;
            document.documentElement.classList.add('has-scroll-smooth');
        } catch (error) {
            console.error("Failed to load Locomotive Scroll", error);
        }
    })();

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
        document.documentElement.classList.remove('has-scroll-smooth');
      }
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
        const timeoutId = setTimeout(() => {
            scrollRef.current?.update();
        }, 100);
        return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return <div ref={containerRef}>{children}</div>;
}
