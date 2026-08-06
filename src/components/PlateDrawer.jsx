import React from 'react';
import { ShoppingBag, ChevronRight, Trash2 } from 'lucide-react';

export default function PlateDrawer({ plate, setPlate, onOpenReservation }) {
  if (!plate || plate.length === 0) return null;

  const totalPrice = plate.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 850,
        width: '90%',
        maxWidth: '600px',
        animation: 'slideUp 0.3s ease-out'
      }}
    >
      <div
        className="glass-card"
        style={{
          background: 'rgba(13, 22, 16, 0.95)',
          backdropFilter: 'blur(16px)',
          border: '1px solid #d4af37',
          padding: '16px 24px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.25)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: '#d4af37',
              color: '#090e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800
            }}
          >
            {plate.length}
          </div>

          <div>
            <span style={{ fontSize: '0.82rem', color: '#a7f3d0', fontWeight: 600, display: 'block' }}>
              Selected Pre-Order Plate
            </span>
            <span style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 800 }}>
              ₹{totalPrice} <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 400 }}>({plate.length} Veg Dishes)</span>
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => setPlate([])}
            title="Clear Plate"
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '6px'
            }}
          >
            <Trash2 size={18} />
          </button>

          <button
            onClick={onOpenReservation}
            className="btn-primary"
            style={{ padding: '10px 20px', fontSize: '0.88rem' }}
          >
            <span>Book Table with Plate</span>
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
