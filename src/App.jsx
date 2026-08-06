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
        setPlate={setPlate}
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
      />

      {/* Floating Selected Dish Plate Drawer */}
      <PlateDrawer
        plate={plate}
        setPlate={setPlate}
        onOpenReservation={() => setIsReservationOpen(true)}
      />
    </div>
  );
}
