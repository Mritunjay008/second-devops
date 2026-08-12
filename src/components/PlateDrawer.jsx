import React, { useState } from 'react';
import { ChevronRight, Trash2, Plus, Minus, ChevronUp, ChevronDown, Utensils } from 'lucide-react';

export default function PlateDrawer({ plate, onUpdateQuantity, onRemoveFromPlate, onClearPlate, onOpenReservation }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!plate || plate.length === 0) return null;

  const totalItemsCount = plate.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalPrice = plate.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 850,
        width: '92%',
        maxWidth: '640px',
        animation: 'slideUp 0.3s ease-out'
      }}
    >
      {/* Expanded Dish List Popover */}
      {isExpanded && (
        <div
          className="glass-card"
          style={{
            background: 'rgba(11, 18, 14, 0.96)',
            backdropFilter: 'blur(20px)',
            border: '1px solid #d4af37',
            borderRadius: '20px 20px 0 0',
            padding: '20px',
            marginBottom: '-10px',
            maxHeight: '320px',
            overflowY: 'auto',
            boxShadow: '0 -10px 40px rgba(0,0,0,0.8)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d4af37', fontWeight: 700, fontSize: '0.95rem' }}>
              <Utensils size={18} />
              <span>Pre-Selected Veg Dishes ({plate.length} unique)</span>
            </div>
            <button
              onClick={onClearPlate}
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#f87171',
                borderRadius: '6px',
                padding: '4px 10px',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Trash2 size={12} />
              <span>Clear All</span>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {plate.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px',
                  padding: '8px 12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexGrow: 1 }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '40px', height: '40px', borderRadius: '6px', objectFit: 'cover' }}
                  />
                  <div>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f8fafc', display: 'block' }}>
                      {item.name}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 700 }}>
                      ₹{item.price * (item.quantity || 1)}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '2px' }}>
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '4px 6px', display: 'flex', alignItems: 'center' }}
                    >
                      <Minus size={12} />
                    </button>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, padding: '0 6px', color: '#ffffff' }}>
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '4px 6px', display: 'flex', alignItems: 'center' }}
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveFromPlate(item.id)}
                    style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '4px' }}
                    title="Remove item"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bar Banner */}
      <div
        className="glass-card"
        style={{
          background: 'rgba(13, 22, 16, 0.95)',
          backdropFilter: 'blur(16px)',
          border: '1px solid #d4af37',
          padding: '12px 20px',
          borderRadius: isExpanded ? '0 0 24px 24px' : '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.25)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#d4af37',
              color: '#090e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}
            title="Toggle item list"
          >
            {totalItemsCount}
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.78rem', color: '#a7f3d0', fontWeight: 600 }}>
                Selected Veg Plate
              </span>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ background: 'none', border: 'none', color: '#d4af37', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                {isExpanded ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
              </button>
            </div>
            <span style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 800 }}>
              ₹{totalPrice} <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 400 }}>({totalItemsCount} items)</span>
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onOpenReservation}
            className="btn-primary"
            style={{ padding: '10px 18px', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
          >
            <span>Book Table with Plate</span>
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
