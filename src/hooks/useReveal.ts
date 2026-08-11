import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    // Mobile devices වල reveal observer අවශ්‍ය නැහැ
    if (window.matchMedia('(max-width: 768px)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal');

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
