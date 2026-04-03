import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const services = [
  {
    num: '01', title: 'Logo Design', subtitle: 'Brand Identity',
    desc: 'Crafting iconic marks that become the face of your brand. Every logo is a distillation of your brand\'s essence — memorable, versatile, and timeless.',
    tags: ['Brand Marks', 'Wordmarks', 'Emblems', 'Icon Sets'],
  },
  {
    num: '02', title: 'Package Design', subtitle: 'Product Experience',
    desc: 'Transforming packaging into a brand touchpoint. From structural design to surface graphics, we create packaging that sells on the shelf.',
    tags: ['Box Design', 'Label Design', 'Wrap Design', '3D Mockups'],
  },
  {
    num: '03', title: 'Flyer Design', subtitle: 'Promotional Print',
    desc: 'Eye-catching flyers that communicate your message with impact. Designed to stop, engage, and convert.',
    tags: ['Event Flyers', 'Promotional', 'Digital Flyers', 'A4 / A5'],
  },
  {
    num: '04', title: 'Brochure Design', subtitle: 'Corporate Print',
    desc: 'Multi-page brochures that tell your brand story beautifully. From trifold to multi-page catalogs, we design with purpose.',
    tags: ['Trifold', 'Bifold', 'Catalog', 'Corporate Profile'],
  },
  {
    num: '05', title: 'Menu Card Design', subtitle: 'F&B Industry',
    desc: 'Menus that elevate the dining experience. Whether for fine dining or casual eateries, your menu is a brand statement.',
    tags: ['Restaurant', 'Café', 'Digital Menu', 'QR Menu'],
  },
  {
    num: '06', title: 'Banner Design', subtitle: 'Visual Display',
    desc: 'Bold banners that command attention. From digital to print, we design banners that make your brand impossible to ignore.',
    tags: ['Social Media', 'Outdoor', 'Roll-up', 'Web Banners'],
  },
  {
    num: '07', title: 'Visiting Card Design', subtitle: 'First Impressions',
    desc: 'Business cards that leave a lasting impression. Your card is often the first physical touchpoint — make it count.',
    tags: ['Standard Cards', 'Luxury Cards', 'Square Format', 'Digital Cards'],
  },
];

const Services: React.FC = () => {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" ref={ref as any} style={{ padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)', background: '#0d0d0d', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative */}
      <div style={{ position: 'absolute', right: 0, top: '10%', width: '30%', height: '80%', background: 'radial-gradient(ellipse at right, rgba(192,57,43,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 'clamp(48px, 8vw, 96px)' }}
        >
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.4em', color: '#c0392b', textTransform: 'uppercase', marginBottom: 20 }}>
            ✦ What I Do
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(36px, 6vw, 80px)', fontWeight: 300, lineHeight: 1, color: '#f5f0eb' }}>
              Design<br /><em style={{ fontStyle: 'italic', color: '#c0392b' }}>Services</em>
            </h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, lineHeight: 1.8, color: '#9c9c97', maxWidth: 320 }}>
              Full-spectrum graphic design services tailored for brands that mean business.
            </p>
          </div>
        </motion.div>

        {/* Service list */}
        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderTop: '1px solid rgba(192,57,43,0.12)',
                padding: '28px 0',
                display: 'grid',
                gridTemplateColumns: '60px 1fr auto',
                gap: '0 32px',
                alignItems: 'center',
                cursor: 'none',
                transition: 'background 0.3s',
                background: hovered === i ? 'rgba(192,57,43,0.04)' : 'transparent',
                borderLeft: hovered === i ? '2px solid #c0392b' : '2px solid transparent',
                paddingLeft: hovered === i ? 20 : 0,
              }}
            >
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: 'rgba(192,57,43,0.4)', fontWeight: 300 }}>{s.num}</span>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 6, flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 400, color: hovered === i ? '#f5f0eb' : '#d0c8c0', transition: 'color 0.3s', letterSpacing: '0.02em' }}>
                    {s.title}
                  </h3>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.2em', color: '#c0392b', textTransform: 'uppercase' }}>{s.subtitle}</span>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: hovered === i ? 'auto' : 0, opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: 1.8, color: '#9c9c97', marginBottom: 12, paddingTop: 4 }}>{s.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {s.tags.map(tag => (
                      <span key={tag} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: '0.2em', color: '#c0392b', border: '1px solid rgba(192,57,43,0.3)', padding: '4px 10px', textTransform: 'uppercase' }}>{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
              <motion.div
                animate={{ x: hovered === i ? 0 : -8, opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ color: '#c0392b', fontSize: 20, fontFamily: "'Cormorant Garamond', serif" }}
              >
                →
              </motion.div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid rgba(192,57,43,0.12)' }} />
        </div>
      </div>
    </section>
  );
};

export default Services;
