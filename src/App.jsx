import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PureVegPromise from './components/PureVegPromise';
import MenuShowcase from './components/MenuShowcase';
import Ambiance from './components/Ambiance';
import Reviews from './components/Reviews';
import ContactFooter from './components/ContactFooter';
import ReservationModal from './components/ReservationModal';
import PlateDrawer from './components/PlateDrawer';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [plate, setPlate] = useState([]);

  const handleAddToPlate = (item) => {
    setPlate(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId, delta) => {
    setPlate(prev => {
      return prev.map(p => {
        if (p.id === itemId) {
          const newQty = p.quantity + delta;
          return newQty > 0 ? { ...p, quantity: newQty } : null;
        }
        return p;
      }).filter(Boolean);
    });
  };

  const handleRemoveFromPlate = (itemId) => {
    setPlate(prev => prev.filter(p => p.id !== itemId));
  };

  const handleClearPlate = () => {
    setPlate([]);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#090e0b', color: '#f8fafc' }}>
      {/* Navigation */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Pure Veg Philosophy & Sacred Promise */}
      <PureVegPromise />

      {/* Signature Pure Veg Menu Showcase */}
      <MenuShowcase
        plate={plate}
        onAddToPlate={handleAddToPlate}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromPlate={handleRemoveFromPlate}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Royal Fine Dining Ambiance */}
      <Ambiance onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Verified Guest Testimonials */}
      <Reviews />

      {/* Contact, Timings & Footer */}
      <ContactFooter onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        plate={plate}
        onClearPlate={handleClearPlate}
      />

      {/* Floating Selected Dish Plate Drawer */}
      <PlateDrawer
        plate={plate}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromPlate={handleRemoveFromPlate}
        onClearPlate={handleClearPlate}
        onOpenReservation={() => setIsReservationOpen(true)}
      />
    </div>
  );
}
