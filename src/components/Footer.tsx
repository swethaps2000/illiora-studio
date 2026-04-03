import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(192,57,43,0.1)', padding: '48px clamp(24px, 6vw, 120px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: "'Poppins', serif", fontSize: 36, fontWeight: 600, color: '#f5f0eb', letterSpacing: '0.08em' }}>
              illiora<span style={{ color: '#c0392b', fontSize: 8, verticalAlign: 'super', letterSpacing: '0.3em', fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>STUDIO</span>
            </div>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.3em', color: '#9c9c97', textTransform: 'uppercase', marginTop: 4 }}>
              The Signature of Modern Brands
            </div>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/illiora.studio/' },
              { label: 'Email', href: 'mailto:hello@illiora.studio' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#9c9c97', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c0392b')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9c9c97')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider with marquee */}
        <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(192,57,43,0.08)', paddingTop: 24, marginBottom: 24 }}>
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', gap: 40, whiteSpace: 'nowrap', width: 'max-content' }}
          >
            {Array(6).fill(['Logo Design', 'Package Design', 'Brochure Design', 'Banner Design', 'Menu Card', 'Visiting Card', 'Flyer Design']).flat().map((item, i) => (
              <span key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, color: 'rgba(232, 172, 166, 0.56)', fontStyle: i % 2 === 0 ? 'italic' : 'normal', letterSpacing: '0.05em' }}>
                {item} ✦
              </span>
            ))}
          </motion.div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, color: '#c2c2c2', letterSpacing: '0.1em' }}>
            © {new Date().getFullYear()} Illiora Studio. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, color: '#c2c2c2', letterSpacing: '0.1em' }}>
            Available for projects · 670604
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
