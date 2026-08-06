import React, { useState, useEffect } from 'react';
import { Leaf, Phone, Calendar, Menu, X, Sparkles, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenReservation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(9, 14, 11, 0.92)'
          : 'linear-gradient(to bottom, rgba(9,14,11,0.85), rgba(9,14,11,0))',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(4px)',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0'
      }}
    >
      {/* Top Banner Notice */}
      <div style={{
        background: 'linear-gradient(90deg, #059669 0%, #10b981 50%, #059669 100%)',
        color: '#ffffff',
        fontSize: '0.78rem',
        fontWeight: 600,
        textAlign: 'center',
        padding: '4px 12px',
        letterSpacing: '0.04em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}>
        <ShieldCheck size={14} />
        <span>100% PURE VEGETARIAN RESTAURANT • Sattvik & Jain Options Available</span>
      </div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '8px'
      }}>
        {/* Brand Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #d4af37',
            boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)'
          }}>
            <Leaf size={24} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="font-serif gold-gradient-text" style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '0.02em' }}>
                THAKUR.08
              </span>
              <span className="veg-icon-square" title="100% Pure Vegetarian"></span>
            </div>
            <span style={{ fontSize: '0.68rem', color: '#10b981', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginTop: '-2px' }}>
              PURE VEG FINE DINING
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {[
            { label: 'Home', href: '#hero' },
            { label: 'Our Veg Promise', href: '#veg-promise' },
            { label: 'Signature Menu', href: '#menu' },
            { label: 'Ambiance', href: '#ambiance' },
            { label: 'Reviews', href: '#reviews' },
            { label: 'Contact Us', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                color: '#e2e8f0',
                textDecoration: 'none',
                fontSize: '0.92rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#d4af37')}
              onMouseLeave={(e) => (e.target.style.color = '#e2e8f0')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="tel:+919876543210"
            style={{
              color: '#d4af37',
              textDecoration: 'none',
              fontSize: '0.88rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
            className="desktop-nav"
          >
            <Phone size={16} />
            <span>+91 98765 43210</span>
          </a>

          <button
            onClick={onOpenReservation}
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '0.88rem' }}
          >
            <Calendar size={16} />
            <span>Reserve Table</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'none',
              padding: '4px'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#0e1611',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginTop: '12px'
        }}>
          {[
            { label: 'Home', href: '#hero' },
            { label: 'Our Veg Promise', href: '#veg-promise' },
            { label: 'Signature Menu', href: '#menu' },
            { label: 'Ambiance', href: '#ambiance' },
            { label: 'Reviews', href: '#reviews' },
            { label: 'Contact Us', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#f8fafc',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+919876543210"
            style={{
              color: '#10b981',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '8px'
            }}
          >
            <Phone size={18} />
            <span>Call: +91 98765 43210</span>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
