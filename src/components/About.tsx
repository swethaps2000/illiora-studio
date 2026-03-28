import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '80+', label: 'Happy Clients' },
  { value: '7', label: 'Design Specialties' },
];

const About: React.FC = () => {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="about" ref={ref as any} style={{ padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)', position: 'relative', overflow: 'hidden' }}>
      {/* BG accent */}
      <div style={{ position: 'absolute', left: 0, top: '20%', width: '40%', height: '60%', background: 'radial-gradient(ellipse at left, rgba(192,57,43,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 100px)', alignItems: 'center' }}>

        {/* Left: Image placeholder / decorative */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ position: 'relative' }}
        >
          <div style={{
            width: '100%', paddingBottom: '120%', position: 'relative',
            background: 'linear-gradient(135deg, #111111 0%, #181818 100%)',
            border: '1px solid rgba(192,57,43,0.15)',
            overflow: 'hidden',
          }}>
            {/* Abstract design representing the designer */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 400 480" style={{ width: '80%', height: '80%' }}>
                <defs>
                  <radialGradient id="rg1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c0392b" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8b1a1a" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse cx="200" cy="240" rx="160" ry="200" fill="url(#rg1)" />
                <path d="M80,400 Q200,100 320,400" stroke="#c0392b" strokeWidth="0.5" fill="none" opacity="0.4" />
                <path d="M60,350 Q200,50 340,350" stroke="#c0392b" strokeWidth="0.5" fill="none" opacity="0.3" />
                <circle cx="200" cy="240" r="80" fill="none" stroke="rgba(192,57,43,0.2)" strokeWidth="1" />
                <circle cx="200" cy="240" r="120" fill="none" stroke="rgba(192,57,43,0.1)" strokeWidth="1" />
                <text x="200" y="230" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontSize="48" fill="#f5f0eb" opacity="0.9">i</text>
                <text x="200" y="275" textAnchor="middle" fontFamily="'Montserrat', sans-serif" fontSize="10" fill="#c0392b" letterSpacing="6" opacity="0.8">ILLIORA</text>
              </svg>
            </div>
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', bottom: -20, right: -20, background: '#c0392b',
              padding: '20px 24px', textAlign: 'center',
            }}
          >
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 600, color: '#f5f0eb', lineHeight: 1 }}>5+</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.2em', color: 'rgba(245,240,235,0.7)', textTransform: 'uppercase' }}>Years</div>
          </motion.div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        >
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.4em', color: '#c0392b', textTransform: 'uppercase', marginBottom: 20 }}>
            ✦ About Me
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.1, color: '#f5f0eb', marginBottom: 24 }}>
            Crafting Identities<br />
            <em style={{ fontStyle: 'italic', color: '#c0392b' }}>That Speak</em>
          </h2>
          <div style={{ width: 48, height: 1, background: '#c0392b', marginBottom: 32 }} />
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.9, color: '#b0a89e', fontWeight: 300, marginBottom: 20 }}>
            I'm a passionate graphic designer with over 5 years of experience crafting distinctive brand identities for businesses worldwide. My work bridges the gap between strategy and aesthetics — creating visuals that don't just look beautiful, but communicate powerfully.
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.9, color: '#b0a89e', fontWeight: 300, marginBottom: 40 }}>
            From logo design to full packaging systems, I bring a meticulous attention to detail and a deep understanding of visual storytelling to every project. I believe every brand deserves a signature — a mark that's unmistakably theirs.
          </p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                style={{ borderLeft: '1px solid rgba(192,57,43,0.3)', paddingLeft: 16 }}
              >
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 600, color: '#c0392b', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.15em', color: '#5a5550', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
