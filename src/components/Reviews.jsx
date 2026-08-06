import React from 'react';
import { Star, Quote, CheckCircle, Heart } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Rajesh & Meena Sharma",
    tag: "Family Dining • Pure Jain Preference",
    rating: 5,
    date: "2 days ago",
    comment: "Finding a 100% Pure Veg restaurant that maintains such high gourmet standards is rare! The Thakur Shahi Thali and Paneer Tikka Angara were out of this world. Clean, authentic, and pure desi ghee goodness."
  },
  {
    id: 2,
    name: "Ananya Deshmukh",
    tag: "Food Critic & Vegetarian Enthusiast",
    rating: 5,
    date: "1 week ago",
    comment: "The Dal Makhani at Thakur.08 is easily the best in the city—slow-cooked over charcoal for hours. You can taste the purity in every bite. Exceptional ambiance and polite staff!"
  },
  {
    id: 3,
    name: "Vikramjit Singh",
    tag: "Anniversary Celebration",
    rating: 5,
    date: "2 weeks ago",
    comment: "Celebrated our 10th anniversary in their VIP private dining section. The Saffron Biryani and Kesar Rasmalai made the night unforgettable. My parents were so happy with the Jain food options."
  }
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: '#090e0b'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
          <div className="veg-tag" style={{ marginBottom: '14px' }}>
            <Heart size={14} color="#f43f5e" fill="#f43f5e" />
            <span>LOVED BY PURE VEG DINERS</span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '16px'
            }}
          >
            What Our Guests Say About <span className="gold-gradient-text">Thakur.08</span>
          </h2>

          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>
            Over 2,500+ glowing reviews from families, Jain food lovers, and connoisseurs of authentic vegetarian dining.
          </p>
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}
        >
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="glass-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <Quote
                size={40}
                color="rgba(212, 175, 55, 0.15)"
                style={{ position: 'absolute', top: '24px', right: '24px' }}
              />

              <div>
                {/* Rating Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p style={{ color: '#e2e8f0', fontSize: '0.98rem', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '24px' }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                    color: '#ffffff',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem'
                  }}
                >
                  {rev.name[0]}
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {rev.name}
                    <CheckCircle size={15} color="#10b981" />
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    {rev.tag} • {rev.date}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
