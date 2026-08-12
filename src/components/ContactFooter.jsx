import React from 'react';
import { MapPin, Phone, Mail, Clock, Leaf, ShieldCheck, MessageCircle, Calendar } from 'lucide-react';

export default function ContactFooter({ onOpenReservation }) {
  return (
    <footer
      id="contact"
      style={{
        background: '#060a08',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Top Info Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #d4af37'
              }}>
                <Leaf size={22} color="#ffffff" />
              </div>
              <span className="font-serif gold-gradient-text" style={{ fontSize: '1.8rem', fontWeight: 800 }}>
                THAKUR.08
              </span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Premier 100% Pure Vegetarian Fine Dining Restaurant. Serving authentic heritage recipes with pure A2 desi ghee, organic whole spices, and uncompromised culinary purity since 2008.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <div className="veg-tag">
                <ShieldCheck size={14} />
                <span>100% PURE VEG GUARANTEED</span>
              </div>

              {onOpenReservation && (
                <button
                  onClick={onOpenReservation}
                  className="btn-primary"
                  style={{ padding: '8px 18px', fontSize: '0.82rem' }}
                >
                  <Calendar size={14} />
                  <span>Reserve Table</span>
                </button>
              )}
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={18} color="#d4af37" />
              <span>Restaurant Timings</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#cbd5e1', fontSize: '0.92rem' }}>
              <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ color: '#10b981', fontWeight: 700, display: 'block', marginBottom: '2px' }}>LUNCH SERVICE</span>
                <span>12:00 PM – 04:00 PM (Everyday)</span>
              </div>

              <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ color: '#d4af37', fontWeight: 700, display: 'block', marginBottom: '2px' }}>DINNER SERVICE</span>
                <span>07:00 PM – 11:30 PM (Everyday)</span>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={18} color="#d4af37" />
              <span>Location & Contact</span>
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', color: '#cbd5e1', fontSize: '0.92rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Thakur.08 Heritage Tower, MG Road, Opp. Grand Plaza, City Center</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="#d4af37" />
                <a href="tel:+919876543210" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 600 }}>
                  +91 98765 43210 / +91 98765 43211
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="#10b981" />
                <span>reservations@thakur08.com</span>
              </li>
            </ul>

            <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#25D366',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '30px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.85rem',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>Thakur.08 Pure Veg Restaurant</strong>. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#veg-promise" style={{ color: '#94a3b8', textDecoration: 'none' }}>Pure Veg Ethics</a>
            <a href="#menu" style={{ color: '#94a3b8', textDecoration: 'none' }}>Full Menu</a>
            <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
