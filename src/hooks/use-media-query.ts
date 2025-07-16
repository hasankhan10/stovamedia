// src/hooks/use-media-query.ts
'use client';

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Set the initial state
    setMatches(mediaQueryList.matches);

    // Add listener for changes
    mediaQueryList.addEventListener('change', listener);

    // Cleanup listener on unmount
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}
