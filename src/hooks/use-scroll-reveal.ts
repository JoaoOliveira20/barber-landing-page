"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollReveal<ElementType extends HTMLElement>() {
  const elementRef = useRef<ElementType>(null);
  const [hasBeenRevealed, setHasBeenRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { elementRef, hasBeenRevealed };
}
