'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    let observer;
    const timeout = setTimeout(() => {
      const main = document.querySelector('main');
      if (!main) return;

      // 1. Target Text Elements to slide in from LEFT
      const textSelector = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li',
        '.section-label', '.eyebrow', '.about-new-eyebrow', '.stim-kicker',
        '.hero-tag', '.btn-learn-more', '.wi-outline-btn', '.stim-outline-btn',
        '.slickline-cta-btn', '.banner-content', '.about-new-hero-message'
      ].join(', ');

      const textElements = Array.from(main.querySelectorAll(textSelector));

      // 2. Target Picture / Image Elements to slide in from OPPOSITE SIDE (RIGHT)
      const imageSelector = [
        'img:not(.card-corner-logo-img):not(.card-mini-logo-corner img):not(.header-logo-img):not(.no-anim)',
        'picture',
        '.stim-art',
        '.stim-reservoir-art',
        '.slickline-hero-image-wrap',
        '.depth-img-wrap',
        '.about-intro-image',
        '.about-qhse-image',
        '.wi-lifecycle-image'
      ].join(', ');

      const imageElements = Array.from(main.querySelectorAll(imageSelector));

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -20px 0px',
        }
      );

      // Apply text animation from left
      textElements.forEach((el) => {
        if (el.closest('.no-scroll-anim')) return;
        if (!el.classList.contains('anim-text-left')) {
          el.classList.add('anim-text-left');
        }

        // Stagger sibling elements for a cascading entrance effect
        const parent = el.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children).filter((c) =>
            c.matches('h1, h2, h3, h4, h5, h6, p, li, article, div')
          );
          const idx = siblings.indexOf(el);
          if (idx > 0) {
            const delay = Math.min(idx * 0.06, 0.35);
            el.style.transitionDelay = `${delay}s`;
          }
        }

        observer.observe(el);
      });

      // Apply picture animation from opposite side (right)
      imageElements.forEach((el) => {
        if (el.closest('.no-scroll-anim')) return;
        if (!el.classList.contains('anim-pic-right')) {
          el.classList.add('anim-pic-right');
        }

        const parent = el.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children).filter((c) =>
            c.matches('img, picture, figure, div, article')
          );
          const idx = siblings.indexOf(el);
          if (idx > 0) {
            const delay = Math.min(idx * 0.08, 0.4);
            el.style.transitionDelay = `${delay}s`;
          }
        }

        observer.observe(el);
      });
    }, 80);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}
