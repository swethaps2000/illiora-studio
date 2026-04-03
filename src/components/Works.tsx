import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const categories = ['All', 'Logo', 'Packaging', 'Flyer', 'Brochure', 'Menu', 'Banner', 'Visiting Card'];

const works = [
  { id: 1, title: 'Noir Coffee Co.', category: 'Logo', tag: 'Brand Identity', year: '2024', colors: ['#1a1a1a', '#c9a96e', '#f5f0eb'] },
  { id: 2, title: 'Velvet Box', category: 'Packaging', tag: 'Luxury Packaging', year: '2024', colors: ['#2d1b1b', '#c0392b', '#f5e6d3'] },
  { id: 3, title: 'Ember Events', category: 'Flyer', tag: 'Event Promo', year: '2024', colors: ['#0d0d0d', '#e74c3c', '#ffffff'] },
  { id: 4, title: 'Aurum Finance', category: 'Brochure', tag: 'Corporate', year: '2023', colors: ['#111111', '#c9a96e', '#f5f0eb'] },
  { id: 5, title: 'The Spice Trail', category: 'Menu', tag: 'Restaurant Brand', year: '2023', colors: ['#1a0f0f', '#c0392b', '#f5deb3'] },
  { id: 6, title: 'Luxe Interiors', category: 'Banner', tag: 'Social Media', year: '2023', colors: ['#0a0a0a', '#b0a89e', '#ffffff'] },
  { id: 7, title: 'Studio Muse', category: 'Visiting Card', tag: 'Creative Agency', year: '2024', colors: ['#0d0d0d', '#c0392b', '#f5f0eb'] },
  { id: 8, title: 'Petal & Pine', category: 'Logo', tag: 'Floral Brand', year: '2023', colors: ['#1a1a1a', '#c9a96e', '#e8ddd0'] },
  { id: 9, title: 'Dark Matter', category: 'Packaging', tag: 'Coffee Brand', year: '2024', colors: ['#080808', '#c0392b', '#f5f0eb'] },
];

const WorkCard: React.FC<{ work: typeof works[0]; index: number; inView: boolean }> = ({ work, index, inView }) => {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ cursor: 'none', position: 'relative', overflow: 'hidden' }}
    >
      {/* Artwork */}
      <div style={{ position: 'relative', paddingBottom: '110%', overflow: 'hidden', background: '#111' }}>
        {/* Generated artwork using work's colors */}
        <svg
          viewBox="0 0 400 440"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', transition: 'transform 0.6s ease' }}
          className={hov ? 'work-hov' : ''}
        >
          <defs>
            <radialGradient id={`wg${work.id}`} cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor={work.colors[1]} stopOpacity="0.5" />
              <stop offset="100%" stopColor={work.colors[0]} stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="400" height="440" fill={work.colors[0]} />
          <ellipse cx="200" cy="220" rx="180" ry="200" fill={`url(#wg${work.id})`} opacity="0.6" />
          <path d="M0,300 Q100,200 200,220 T400,180" stroke={work.colors[1]} strokeWidth="0.5" fill="none" opacity="0.4" />
          <path d="M0,320 Q100,220 200,240 T400,200" stroke={work.colors[1]} strokeWidth="0.5" fill="none" opacity="0.3" />
          <circle cx="200" cy="200" r="80" fill="none" stroke={work.colors[1]} strokeWidth="0.5" opacity="0.3" />
          <text x="200" y="195" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontSize="22" fill={work.colors[2]} opacity="0.9" letterSpacing="2">{work.title}</text>
          <text x="200" y="220" textAnchor="middle" fontFamily="'Montserrat', sans-serif" fontSize="7" fill={work.colors[1]} opacity="0.8" letterSpacing="4">{work.tag.toUpperCase()}</text>
        </svg>

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hov ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 16,
          }}
        >
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.4em', color: '#c0392b', textTransform: 'uppercase' }}>View Project</span>
          <div style={{ width: 40, height: 1, background: '#c0392b' }} />
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 28, color: '#f5f0eb' }}>{work.title}</span>
        </motion.div>
      </div>

      {/* Info */}
      <div style={{ padding: '16px 0 8px', borderBottom: '1px solid rgba(192,57,43,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: '#f5f0eb', fontWeight: 400 }}>{work.title}</div>
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.2em', color: '#5a5550', textTransform: 'uppercase', marginTop: 4 }}>{work.category} · {work.tag}</div>
        </div>
        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'rgba(192,57,43,0.4)' }}>{work.year}</span>
      </div>

      <style>{`.work-hov { transform: scale(1.06); }`}</style>
    </motion.div>
  );
};

const Works: React.FC = () => {
  const [ref, inView] = useInView(0.05);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? works : works.filter(w => w.category === activeCategory);

  return (
    <section id="works" ref={ref as any} style={{ padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)', background: '#0d0d0d', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 'clamp(40px, 6vw, 72px)' }}
        >
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.4em', color: '#c0392b', textTransform: 'uppercase', marginBottom: 20 }}>
            ✦ Portfolio
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(36px, 6vw, 80px)', fontWeight: 300, lineHeight: 1, color: '#f5f0eb' }}>
              Selected <em style={{ fontStyle: "'Poppins', sans-serif", color: '#c0392b' }}>Works</em>
            </h2>
          </div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase',
                  padding: '8px 18px', border: '1px solid',
                  borderColor: activeCategory === cat ? '#c0392b' : 'rgba(192,57,43,0.2)',
                  background: activeCategory === cat ? '#c0392b' : 'transparent',
                  color: activeCategory === cat ? '#f5f0eb' : '#9c9c97',
                  cursor: 'none', transition: 'all 0.3s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}
          >
            {filtered.map((work, i) => (
              <WorkCard key={work.id} work={work} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: 64 }}
        >
          <a
            href="https://www.instagram.com/illiora.studio/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
              color: '#c0392b', border: '1px solid rgba(192,57,43,0.4)', padding: '16px 48px',
              display: 'inline-block', transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(192,57,43,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = '#c0392b'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(192,57,43,0.4)'; }}
          >
            View All on Instagram ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
