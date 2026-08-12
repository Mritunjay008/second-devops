import React from 'react';
import { Sparkles, Users, Music, ShieldCheck, MapPin } from 'lucide-react';

export default function Ambiance({ onOpenReservation }) {
  return (
    <section
      id="ambiance"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'linear-gradient(180deg, #090e0b 0%, #0d1610 100%)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Visual Showcase Block */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          <div>
            <div className="veg-tag" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} color="#d4af37" />
              <span>ROYAL HERITAGE AMBIANCE</span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '20px'
              }}
            >
              An Atmosphere Crafted for <span className="gold-gradient-text">Memorable Celebrations</span>
            </h2>

            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px' }}>
              Step into an opulent space where warm golden lighting, emerald velvet accents, 
              and rich mahogany woods set the stage for an unforgettable pure vegetarian feast with your loved ones.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '36px' }}>
              {[
                {
                  icon: <Users size={20} color="#d4af37" />,
                  title: 'Private Family Dining',
                  desc: 'Cozy soundproof booths for birthdays & gatherings.'
                },
                {
                  icon: <Music size={20} color="#10b981" />,
                  title: 'Sattvik Ambience',
                  desc: 'Soothing instrumental music & calm, fragrant air.'
                },
                {
                  icon: <ShieldCheck size={20} color="#38bdf8" />,
                  title: 'Ultra Clean Kitchen',
                  desc: 'Open glass window view into our pristine kitchen.'
                },
                {
                  icon: <MapPin size={20} color="#f43f5e" />,
                  title: 'Complimentary Valet',
                  desc: 'Hassle-free parking right at the entrance.'
                }
              ].map((feat, i) => (
                <div key={i} style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ marginBottom: '8px' }}>{feat.icon}</div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '4px' }}>{feat.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.4 }}>{feat.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenReservation}
              className="btn-primary"
              style={{ padding: '12px 30px' }}
            >
              Reserve a Private Table
            </button>
          </div>

          {/* Right Image Container */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass-card"
              style={{
                padding: '12px',
                background: 'rgba(17, 26, 20, 0.8)',
                position: 'relative'
              }}
            >
              <img
                src="/images/ambiance.jpg"
                alt="Thakur.08 Fine Dining Interior"
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
              />
            </div>
          </div>

        </div>

        {/* Key Ticker Counter */}
        <div
          className="glass-card"
          style={{
            marginTop: '60px',
            padding: '32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            textAlign: 'center',
            background: 'rgba(17, 26, 20, 0.6)'
          }}
        >
          {[
            { num: '100%', label: 'Pure Vegetarian Guarantee' },
            { num: '15+', label: 'Years of Culinary Heritage' },
            { num: '50+', label: 'Authentic Signature Dishes' },
            { num: '100k+', label: 'Delighted Diners Served' }
          ].map((stat, idx) => (
            <div key={idx} style={{ padding: '12px' }}>
              <div className="gold-gradient-text font-serif" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>
                {stat.num}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '6px', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
