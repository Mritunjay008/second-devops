import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, MessageCircle, Utensils } from 'lucide-react';

export default function ReservationModal({ isOpen, onClose, plate = [], onClearPlate }) {
  const todayDate = new Date().toISOString().split('T')[0];
  const [step, setStep] = useState(1);
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: todayDate,
    time: '08:00 PM',
    seating: 'Main Dining Hall',
    isJainPreference: false,
    isSpecialOccasion: false,
    notes: ''
  });

  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Phone Validation
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return;
    }
    setPhoneError('');

    const randomRef = 'THAKUR-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(randomRef);
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    if (onClearPlate) onClearPlate();
    onClose();
  };

  const totalPlatePrice = plate.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  // Generate WhatsApp pre-filled message text
  const dishesListText = plate.length > 0
    ? plate.map(p => `• ${p.name} × ${p.quantity || 1}`).join('%0A')
    : 'None';

  const waMessage = `*THAKUR.08 RESERVATION DETAILS*%0A%0A*Booking Ref:* ${bookingRef}%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Date & Time:* ${formData.date} @ ${formData.time}%0A*Guests:* ${formData.guests} (${formData.seating})%0A*Jain Kitchen:* ${formData.isJainPreference ? 'Yes' : 'No'}%0A%0A*Pre-Selected Veg Dishes:*%0A${dishesListText}%0A*Est. Total:* ₹${totalPlatePrice}`;

  const waUrl = `https://wa.me/919876543210?text=${waMessage}`;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '580px',
          padding: '36px',
          background: '#0d1610',
          border: '1px solid #d4af37',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.06)',
            border: 'none',
            color: '#cbd5e1',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {step === 1 ? (
          <div>
            {/* Modal Title */}
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div className="veg-tag" style={{ marginBottom: '10px' }}>
                <ShieldCheck size={14} />
                <span>100% PURE VEG FINE DINING</span>
              </div>
              <h2 className="font-serif gold-gradient-text" style={{ fontSize: '1.8rem', fontWeight: 800 }}>
                Reserve Your Table at Thakur.08
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '4px' }}>
                Experience royal vegetarian hospitality. Instant confirmation.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Thakur"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(212,175,55,0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (phoneError) setPhoneError('');
                    }}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(255,255,255,0.04)',
                      border: phoneError ? '1px solid #f87171' : '1px solid rgba(212,175,55,0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  />
                  {phoneError && (
                    <span style={{ color: '#f87171', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
                      {phoneError}
                    </span>
                  )}
                </div>
              </div>

              {/* Date, Time & Guests */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    min={todayDate}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 10px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(212,175,55,0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 10px',
                      background: '#121d16',
                      border: '1px solid rgba(212,175,55,0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.85rem'
                    }}
                  >
                    <option value="12:30 PM">12:30 PM (Lunch)</option>
                    <option value="01:30 PM">01:30 PM (Lunch)</option>
                    <option value="02:30 PM">02:30 PM (Lunch)</option>
                    <option value="07:30 PM">07:30 PM (Dinner)</option>
                    <option value="08:30 PM">08:30 PM (Dinner)</option>
                    <option value="09:30 PM">09:30 PM (Dinner)</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 10px',
                      background: '#121d16',
                      border: '1px solid rgba(212,175,55,0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.85rem'
                    }}
                  >
                    <option value="2 Guests">2 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="6 Guests">6 Guests</option>
                    <option value="8+ Large Family">8+ Large Family</option>
                  </select>
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                  Seating Area Preference
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                  {['Main Dining Hall', 'Royal VIP Booth', 'Garden View'].map((area) => (
                    <button
                      type="button"
                      key={area}
                      onClick={() => setFormData({ ...formData, seating: area })}
                      style={{
                        padding: '10px 8px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        border: formData.seating === area ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.08)',
                        background: formData.seating === area ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.03)',
                        color: formData.seating === area ? '#6ee7b7' : '#94a3b8',
                        cursor: 'pointer'
                      }}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pre-Selected Dishes Summary Box if plate has items */}
              {plate.length > 0 && (
                <div style={{ background: 'rgba(212, 175, 55, 0.08)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d4af37', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>
                    <Utensils size={16} />
                    <span>Attached Pre-Order Plate ({plate.length} dishes)</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                    {plate.map(p => `${p.name} (${p.quantity || 1}x)`).join(', ')}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#10b981', fontWeight: 700, marginTop: '4px' }}>
                    Est. Total: ₹{totalPlatePrice}
                  </div>
                </div>
              )}

              {/* Special Pure Veg / Jain Checkboxes */}
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', marginBottom: '8px' }}>
                  <input
                    type="checkbox"
                    checked={formData.isJainPreference}
                    onChange={(e) => setFormData({ ...formData, isJainPreference: e.target.checked })}
                    style={{ accentColor: '#10b981', width: '16px', height: '16px' }}
                  />
                  <span style={{ fontSize: '0.88rem', color: '#f1f5f9', fontWeight: 600 }}>
                    🌿 Require Pure Jain Preparation (No Onion / No Garlic)
                  </span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.isSpecialOccasion}
                    onChange={(e) => setFormData({ ...formData, isSpecialOccasion: e.target.checked })}
                    style={{ accentColor: '#d4af37', width: '16px', height: '16px' }}
                  />
                  <span style={{ fontSize: '0.88rem', color: '#f1f5f9', fontWeight: 600 }}>
                    ✨ Celebrating Birthday / Anniversary (Complimentary Dessert)
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '14px', justifyContent: 'center', fontSize: '1rem', marginTop: '8px' }}
              >
                Confirm Table Reservation
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10b981, #047857)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)'
              }}
            >
              <CheckCircle2 size={36} color="#ffffff" />
            </div>

            <h3 className="font-serif gold-gradient-text" style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>
              Reservation Confirmed!
            </h3>

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '24px' }}>
              Thank you, <strong>{formData.name}</strong>. We look forward to serving you pure vegetarian royal dishes!
            </p>

            {/* Booking Details Card */}
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'left',
                marginBottom: '24px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
                <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Booking Ref:</span>
                <span style={{ color: '#d4af37', fontWeight: 800, fontSize: '0.95rem' }}>{bookingRef}</span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.88rem' }}>
                <div>
                  <span style={{ color: '#64748b', display: 'block' }}>Date & Time</span>
                  <strong style={{ color: '#ffffff' }}>{formData.date} @ {formData.time}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748b', display: 'block' }}>Guests</span>
                  <strong style={{ color: '#ffffff' }}>{formData.guests} ({formData.seating})</strong>
                </div>
              </div>

              {plate.length > 0 && (
                <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: '#d4af37', fontSize: '0.82rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    Pre-Ordered Veg Dishes:
                  </span>
                  <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                    {plate.map(p => `${p.name} (${p.quantity || 1}x)`).join(', ')}
                  </div>
                </div>
              )}

              {formData.isJainPreference && (
                <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.06)', color: '#34d399', fontSize: '0.82rem', fontWeight: 700 }}>
                  🌿 Pure Jain Kitchen Preparation Noted
                </div>
              )}
            </div>

            {/* Action Buttons: WhatsApp Share & Done */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#25D366',
                  color: '#ffffff',
                  padding: '14px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                }}
              >
                <MessageCircle size={20} />
                <span>Send Booking & Dishes to WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
              >
                Done & Return to Homepage
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
