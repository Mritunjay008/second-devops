import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function PureVegPromise() {
  const promises = [
    {
      title: '100% Meat & Egg Free Sanctuary',
      desc: 'Our kitchen, cookware, and storage are 100% dedicated to pure vegetarian cooking. Absolute zero compromise on purity.'
    },
    {
      title: 'Freshly Prepared Cottage Cheese (Paneer)',
      desc: 'We curdle pure whole milk fresh every morning to make the softest, melt-in-your-mouth paneer without preservatives.'
    },
    {
      title: 'Jain & Sattvik Special Customization',
      desc: 'Specialized menu sections prepared strictly without onion, garlic, or root vegetables upon your request.'
    },
    {
      title: 'Artisanal Hand-Ground Spices',
      desc: 'Whole coriander, cumin, cardamom, and saffron roasted gently in-house to preserve rich natural aromas and nutritional goodness.'
    }
  ];

  return (
    <section
      id="veg-promise"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'linear-gradient(180deg, #090e0b 0%, #0d1610 50%, #090e0b 100%)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column: Visual Showcase Card */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass-card"
              style={{
                padding: '12px',
                background: 'rgba(17, 26, 20, 0.8)',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <img
                src="/images/thali.jpg"
                alt="Royal Thakur Pure Veg Thali"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  background: 'rgba(9, 14, 11, 0.88)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <ShieldCheck size={26} color="#ffffff" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                    Certified Pure Vegetarian
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#a7f3d0' }}>
                    Every dish is blessed with authentic taste & uncompromised purity.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Floating Badge */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                background: 'linear-gradient(135deg, #d4af37 0%, #b89228 100%)',
                color: '#090e0b',
                padding: '12px 20px',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(212, 175, 55, 0.4)',
                fontWeight: 800,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Sparkles size={18} />
              <span>Est. 2008 • 15+ Yrs Purity</span>
            </div>
          </div>

          {/* Right Column: Promise Text Content */}
          <div>
            <div className="veg-tag" style={{ marginBottom: '16px' }}>
              <ShieldCheck size={14} />
              <span>OUR SACRED COMMITMENT</span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#ffffff',
                marginBottom: '20px'
              }}
            >
              The Science & Art of <span className="veg-gradient-text">100% Pure Vegetarian</span> Dining
            </h2>

            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px' }}>
              At <strong>Thakur.08</strong>, vegetarianism is not just a menu choice—it is our sole passion, 
              philosophy, and pride. We believe that rich Indian spices, fresh vegetables, and pure dairy hold infinite possibilities for creating world-class gourmet experiences.
            </p>

            {/* List of 4 Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
              {promises.map((p, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                    e.currentTarget.style.background = 'rgba(16, 185, 129, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                >
                  <CheckCircle2 size={22} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '4px' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
