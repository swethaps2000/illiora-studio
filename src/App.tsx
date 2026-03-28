import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setFollowerPos({ x: e.clientX, y: e.clientY }), 80);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          position: 'fixed', width: 8, height: 8, background: '#c0392b',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 9999,
          left: cursorPos.x, top: cursorPos.y, transform: 'translate(-50%,-50%)',
          transition: 'transform 0.1s ease',
        }}
      />
      <div
        style={{
          position: 'fixed', width: 32, height: 32, border: '1px solid rgba(192,57,43,0.45)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 9998,
          left: followerPos.x, top: followerPos.y, transform: 'translate(-50%,-50%)',
          transition: 'all 0.15s ease',
        }}
      />

      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            style={{
              position: 'fixed', inset: 0, background: '#080808', zIndex: 9998,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 24,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 56, fontWeight: 600, color: '#f5f0eb', letterSpacing: '0.15em' }}
            >
              illiora
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }}
              style={{ height: 1, background: 'linear-gradient(90deg, transparent, #c0392b, transparent)' }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.4em', color: '#5a5550', textTransform: 'uppercase' }}
            >
              The Design Studio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ cursor: 'none' }}>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Experience />
        <Works />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
