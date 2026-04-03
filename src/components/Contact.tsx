import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Contact: React.FC = () => {
  const [ref, inView] = useInView(0.15);
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%', background: 'transparent',
    border: 'none', borderBottom: `1px solid ${focused === field ? '#c0392b' : 'rgba(192,57,43,0.2)'}`,
    color: '#f5f0eb', fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 300,
    padding: '14px 0', outline: 'none', letterSpacing: '0.05em',
    transition: 'border-color 0.3s', cursor: 'none',
  });

  return (
    <section id="contact" ref={ref as any} style={{ padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 0, bottom: 0, width: '50%', height: '70%', background: 'radial-gradient(ellipse at bottom right, rgba(192,57,43,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 8vw, 120px)' }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.4em', color: '#c0392b', textTransform: 'uppercase', marginBottom: 20 }}>
            ✦ Get In Touch
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 300, lineHeight: 1.05, color: '#f5f0eb', marginBottom: 24 }}>
            Let's Create<br />
            <em style={{ fontStyle: 'italic', color: '#c0392b' }}>Something Great</em>
          </h2>
          <div style={{ width: 48, height: 1, background: '#c0392b', marginBottom: 32 }} />
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, lineHeight: 1.9, color: '#9c9c97', fontWeight: 300, marginBottom: 48 }}>
            Ready to elevate your brand? Whether you need a new logo, a complete brand identity, or packaging that stands out — I'm here to bring your vision to life.
          </p>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { label: 'Email', value: 'hello@illiora.studio', href: 'mailto:hello@illiora.studio' },
              { label: 'Instagram', value: '@illiora.studio', href: 'https://www.instagram.com/illiora.studio/' },
              { label: 'Available For', value: 'Freelance & Studio Projects' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: 24, alignItems: 'baseline', borderBottom: '1px solid rgba(192,57,43,0.08)', paddingBottom: 16 }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.3em', color: '#9c9c97', textTransform: 'uppercase', minWidth: 100 }}>{item.label}</span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: '#9c9c97', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#c0392b')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9c9c97')}
                  >{item.value}</a>
                ) : (
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: '#9c9c97' }}>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 20 }}
            >
              <div style={{ width: 64, height: 64, borderRadius: '50%', border: '1px solid #c0392b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: '#c0392b' }}>✓</div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 36, fontWeight: 300, color: '#f5f0eb' }}>Message Sent</h3>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: '#9c9c97', lineHeight: 1.8 }}>Thank you for reaching out. I'll get back to you within 24 hours.</p>
              <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', service: '', message: '' }); }} style={{ background: 'none', border: '1px solid rgba(192,57,43,0.3)', color: '#c0392b', fontFamily: "'Poppins', sans-serif", fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', padding: '12px 28px', cursor: 'none', marginTop: 8 }}>
                Send Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div>
                  <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.3em', color: '#9c9c97', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Name</label>
                  <input
                    required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                    style={inputStyle('name')} placeholder="Your name"
                  />
                </div>
                <div>
                  <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.3em', color: '#9c9c97', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Email</label>
                  <input
                    required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    style={inputStyle('email')} placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.3em', color: '#9c9c97', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Service Required</label>
                <select
                  required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}
                  style={{ ...inputStyle('service'), cursor: 'none' }}
                >
                  <option value="" style={{ background: '#111' }}>Select a service...</option>
                  {['Logo Design', 'Package Design', 'Flyer Design', 'Brochure Design', 'Menu Card Design', 'Banner Design', 'Visiting Card Design', 'Full Brand Identity'].map(s => (
                    <option key={s} value={s} style={{ background: '#111' }}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, letterSpacing: '0.3em', color: '#9c9c97', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Message</label>
                <textarea
                  required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                  style={{ ...inputStyle('message'), resize: 'none' }}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                style={{
                  fontFamily: "'Poppins', sans-serif", fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: '#f5f0eb', background: '#c0392b', border: 'none', padding: '18px 40px',
                  cursor: 'none', transition: 'all 0.3s', alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#e74c3c'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#c0392b'; }}
              >
                Send Message →
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
