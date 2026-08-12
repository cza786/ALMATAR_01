'use client';

import { useState, useEffect, useRef, useMemo } from 'react';

/**
 * AnimatedCounter Component
 * 1. Scroll-Triggered Animated Counter (Count-Up) using easeOutExpo (1.5s duration)
 * 2. Pulse / Highlight Glow on Final Value Arrival
 */
export default function AnimatedCounter({
  value,
  duration = 1500,
  delay = 0,
  className = ''
}) {
  const [displayValue, setDisplayValue] = useState('');
  const [isCounting, setIsCounting] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const containerRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  const strVal = String(value ?? '');
  const match = useMemo(() => strVal.match(/^([^\d]*)([\d,.]+)(.*)$/), [strVal]);

  useEffect(() => {
    hasAnimatedRef.current = false;
    setDisplayValue('');
    setIsPulsing(false);
  }, [value]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !match) return;

    const prefix = match[1];
    const rawNumStr = match[2].replace(/,/g, '');
    const suffix = match[3];
    const targetNum = parseFloat(rawNumStr);
    const isDecimal = rawNumStr.includes('.');
    const decimalPlaces = isDecimal ? rawNumStr.split('.')[1].length : 0;

    if (isNaN(targetNum)) return;

    let animationFrameId;
    let timeoutId;
    let pulseTimerId;

    const startCounter = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      setIsCounting(true);

      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // easeOutExpo easing curve: fast count-up that settles gracefully
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentNum = easeProgress * targetNum;

        const formattedNum = isDecimal
          ? currentNum.toFixed(decimalPlaces)
          : Math.floor(currentNum).toLocaleString();

        setDisplayValue(`${prefix}${formattedNum}${suffix}`);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCounter);
        } else {
          const finalNum = isDecimal
            ? targetNum.toFixed(decimalPlaces)
            : targetNum.toLocaleString();
          setDisplayValue(`${prefix}${finalNum}${suffix}`);
          setIsCounting(false);

          // Trigger brief pulse highlight glow on final arrival
          setIsPulsing(true);
          pulseTimerId = setTimeout(() => {
            setIsPulsing(false);
          }, 450);
        }
      };

      timeoutId = setTimeout(() => {
        animationFrameId = requestAnimationFrame(updateCounter);
      }, delay);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    const rect = node.getBoundingClientRect();
    if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0) {
      startCounter();
    }

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
      clearTimeout(pulseTimerId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration, delay, match]);

  if (!match) {
    return <span className={className}>{strVal}</span>;
  }

  const initialDisplay = displayValue || `${match[1]}0${match[3]}`;

  return (
    <span
      ref={containerRef}
      className={`${className} ${isCounting ? 'counter-animating' : ''} ${isPulsing ? 'stat-pulse-glow' : ''}`}
      style={{ fontVariantNumeric: 'tabular-nums', display: 'inline-block' }}
    >
      {initialDisplay}
    </span>
  );
}
