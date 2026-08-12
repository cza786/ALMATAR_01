'use client';

import { useState, useEffect, useRef } from 'react';
import AnimatedCounter from '@/components/AnimatedCounter';
import { useLanguage } from '@/context/LanguageContext';

export default function MinimalistStatsBar() {
  const { t } = useLanguage();
  const [isInView, setIsInView] = useState(false);
  const [activeKey, setActiveKey] = useState(null);
  const [counterKeys, setCounterKeys] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    // Initial check if container is already in viewport
    const rect = node.getBoundingClientRect();
    if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0) {
      setIsInView(true);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { key: 'years', value: t('stats.years'), label: t('stats.yearsLabel'), delay: 100 },
    { key: 'projects', value: t('stats.projects'), label: t('stats.projectsLabel'), delay: 200 },
    { key: 'wells', value: t('stats.wells'), label: t('stats.wellsLabel'), delay: 300 },
    { key: 'safety', value: t('stats.safety'), label: t('stats.safetyLabel'), delay: 400 },
  ];

  const handleStatClick = (key) => {
    setActiveKey(prev => (prev === key ? null : key));
    setCounterKeys(prev => ({
      ...prev,
      [key]: (prev[key] || 0) + 1,
    }));
  };

  return (
    <section className="home-stats-section" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
      <div className="container">
        <div
          ref={containerRef}
          className={`minimalist-stats-bar ${isInView ? 'in-view' : ''}`}
        >
          {stats.map((stat, index) => {
            const isActive = activeKey === stat.key;
            const counterKey = counterKeys[stat.key] || 0;

            return (
              <div key={stat.key} style={{ display: 'contents' }}>
                <div
                  className={`minimalist-stat-item ${isInView ? 'in-view' : ''} ${isActive ? 'active-selected' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => handleStatClick(stat.key)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="card-top-accent"></div>
                  <div className="stat-big-number">
                    <AnimatedCounter
                      key={`${stat.key}-${counterKey}`}
                      value={stat.value}
                      duration={1200}
                      delay={0}
                    />
                  </div>
                  <div className="stat-sub-label">{stat.label}</div>
                </div>

                {index < stats.length - 1 && <div className="stat-vertical-divider" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

