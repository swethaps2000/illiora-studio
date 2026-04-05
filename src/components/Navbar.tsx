import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo_red from '../assets/logo_red_and_white.png';
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 48px',
          background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(192,57,43,0.12)' : 'none',
          transition: 'all 0.4s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 72,
        }}
      >
        {/* Logo */}
        {/* <a href="#home" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 600, letterSpacing: '0.12em', color: '#ffffff' }}>
          illiora<span style={{ color: '#af6058', fontSize: 8, verticalAlign: 'super', letterSpacing: '0.3em', fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>STUDIO</span>
        </a> */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
  <img
    src={logo_red}
    alt="Illiora Studio Logo"
    style={{
      height: 50,   // adjust this based on your design
      width: 'auto',
      objectFit: 'contain',
    }}
  />
</a>

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', gap: 40, listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: '#ffffff', transition: 'color 0.3s',
                  position: 'relative',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c0392b')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#b0a89e')}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              style={{
                fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: '#f5f0eb', background: '#9c241c',
                padding: '10px 24px', transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#e74c3c'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#c0392b'; }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'none', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
          className="hamburger"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={menuOpen
                ? i === 0 ? { rotate: 45, y: 9 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -9 }
                : { rotate: 0, y: 0, opacity: 1 }
              }
              style={{ display: 'block', width: i === 1 ? 20 : 28, height: 1, background: '#f5f0eb', transformOrigin: 'center' }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
              position: 'fixed', inset: 0, background: '#080808', zIndex: 99,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40,
            }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 300,
                  letterSpacing: '0.08em', color: '#ffffff',
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex !important; }
        .hamburger { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
