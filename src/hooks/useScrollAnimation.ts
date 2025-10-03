import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(options: ScrollAnimationOptions = {}) => {
  const elementRef = useRef<T | null>(null);
  
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Ajouter la classe hidden par défaut
    element.classList.add('scroll-hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Élément visible : déclencher l'animation
            entry.target.classList.remove('scroll-hidden');
            entry.target.classList.add('scroll-visible');
            
            // Si triggerOnce est true, arrêter d'observer
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            // Si on veut que l'animation se répète
            entry.target.classList.remove('scroll-visible');
            entry.target.classList.add('scroll-hidden');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return elementRef;
};

// Hook avec animation personnalisée
export const useScrollAnimationWithDelay = <T extends HTMLElement = HTMLDivElement>(delay: number = 0, options: ScrollAnimationOptions = {}) => {
  const elementRef = useRef<T | null>(null);
  
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.classList.add('scroll-hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove('scroll-hidden');
              entry.target.classList.add('scroll-visible');
            }, delay);
            
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('scroll-visible');
            entry.target.classList.add('scroll-hidden');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold, rootMargin, triggerOnce]);

  return elementRef;
};

// Hook pour animer plusieurs éléments avec un stagger
export const useStaggeredAnimation = (itemCount: number, staggerDelay: number = 100, options: ScrollAnimationOptions = {}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Sélectionner tous les enfants directs
    const children = Array.from(container.children) as HTMLElement[];
    
    // Ajouter la classe hidden à tous les enfants
    children.forEach((child) => {
      child.classList.add('scroll-hidden');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animer les enfants avec un délai staggered
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.remove('scroll-hidden');
                child.classList.add('scroll-visible');
              }, index * staggerDelay);
            });
            
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            children.forEach((child) => {
              child.classList.remove('scroll-visible');
              child.classList.add('scroll-hidden');
            });
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [itemCount, staggerDelay, threshold, rootMargin, triggerOnce]);

  return containerRef;
};