import React from 'react';
import { Calendar, Utensils, Star, Award, Flame, Leaf, Clock, Sparkles } from 'lucide-react';

export default function Hero({ onOpenReservation }) {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '130px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Background Image with Dark Emerald Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) contrast(1.15)',
          transform: 'scale(1.05)',
          transition: 'transform 10s ease'
        }}
      />

      {/* Radiant Gradient Mask */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(9, 14, 11, 0.4) 0%, rgba(9, 14, 11, 0.85) 75%, #090e0b 100%), linear-gradient(to bottom, rgba(9,14,11,0.6) 0%, rgba(9,14,11,0.95) 100%)'
        }}
      />

      {/* Decorative Glow Orbs */}
      <div className="glow-background" style={{ top: '15%', left: '10%' }} />
      <div className="glow-background" style={{ bottom: '15%', right: '10%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)' }} />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center'
        }}
      >
        {/* Top Pure Veg Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            backdropFilter: 'blur(10px)',
            padding: '8px 20px',
            borderRadius: '9999px',
            marginBottom: '24px',
            boxShadow: '0 4px 20px rgba(16, 185, 129, 0.2)'
          }}
        >
          <span className="veg-icon-square" />
          <span style={{ color: '#6ee7b7', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            100% PURE VEGETARIAN FINE DINING
          </span>
          <Sparkles size={16} color="#d4af37" />
        </div>

        {/* Main Title */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}
        >
          Welcome to <span className="gold-gradient-text font-serif">Thakur.08</span>
          <br />
          <span style={{ fontSize: '0.75em', fontWeight: 600, color: '#f1f5f9' }}>
            Where Heritage Meets <span className="veg-gradient-text">Pure Veg Elegance</span>
          </span>
        </h1>

        {/* Subtitle Description */}
        <p
          style={{
            fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
            color: '#cbd5e1',
            maxWidth: '780px',
            margin: '0 auto 36px',
            fontWeight: 400,
            lineHeight: 1.7
          }}
        >
          Indulge in a royal culinary journey crafted exclusively from hand-picked organic vegetables, 
          pure desi ghee, fresh daily cottage cheese, and authentic secret spices. Zero meat, zero eggs, 100% pure soul.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '18px',
            flexWrap: 'wrap',
            marginBottom: '60px'
          }}
        >
          <button
            onClick={onOpenReservation}
            className="btn-primary"
            style={{ padding: '14px 36px', fontSize: '1.05rem' }}
          >
            <Calendar size={20} />
            <span>Book a Table Now</span>
          </button>

          <a
            href="#menu"
            className="btn-secondary"
            style={{ padding: '14px 32px', fontSize: '1.05rem', textDecoration: 'none' }}
          >
            <Utensils size={20} color="#d4af37" />
            <span>View Signature Menu</span>
          </a>
        </div>

        {/* Feature Highlights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginTop: '20px'
          }}
        >
          {[
            {
              icon: <Leaf size={24} color="#10b981" />,
              title: '100% Pure Veg',
              desc: 'Strictly vegetarian kitchen with Jain & Sattvik preparation upon request.'
            },
            {
              icon: <Flame size={24} color="#e67e22" />,
              title: 'Charcoal Tandoor',
              desc: 'Authentic clay oven smoking for smoky paneer & soft stuffed naan bread.'
            },
            {
              icon: <Award size={24} color="#d4af37" />,
              title: 'Pure Desi Ghee',
              desc: 'Cooked in artisanal A2 ghee and cold-pressed oils for rich natural taste.'
            },
            {
              icon: <Star size={24} color="#f59e0b" />,
              title: '4.9 ★ Customer Rating',
              desc: 'Voted #1 Pure Veg fine dining destination by over 2,500+ happy food lovers.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '24px',
                textAlign: 'left',
                background: 'rgba(17, 26, 20, 0.7)',
                border: '1px solid rgba(212, 175, 55, 0.15)'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
