import React, { useState } from 'react';
import { Search, Flame, Star, ShoppingBag, Plus, Sparkles, Minus } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 1,
    name: "Thakur's Royal Shahi Thali",
    category: "Royal Thalis",
    price: 449,
    rating: 4.9,
    reviews: 420,
    spice: "Medium 🌶️🌶️",
    image: "/images/thali.jpg",
    isChefSpecial: true,
    isJainAvailable: true,
    description: "Grand vegetarian platter: Paneer Tikka Masala, Creamy Dal Makhani, Saffron Dum Biryani, Garlic Butter Naan, Gulab Jamun, Papad & Mint Chaas."
  },
  {
    id: 2,
    name: "Paneer Tikka Angara",
    category: "Paneer & Starters",
    price: 349,
    rating: 4.8,
    reviews: 310,
    spice: "Spicy 🌶️🌶️🌶️",
    image: "/images/paneer.jpg",
    isChefSpecial: true,
    isJainAvailable: true,
    description: "Charcoal charred fresh cottage cheese cubes marinated in smoked hung curd, mustard oil, Kashmiri red chilli & authentic aromatic spices."
  },
  {
    id: 3,
    name: "Dal Makhani Thakur Special",
    category: "Chef's Specials",
    price: 299,
    rating: 4.9,
    reviews: 580,
    spice: "Mild 🌶️",
    image: "/images/hero.jpg",
    isChefSpecial: true,
    isJainAvailable: false,
    description: "Whole black lentils slow-cooked overnight over gentle charcoal embers, finished with hand-churned white butter and fresh double cream."
  },
  {
    id: 4,
    name: "Subz Handi Dum Biryani",
    category: "Breads & Rice",
    price: 329,
    rating: 4.7,
    reviews: 290,
    spice: "Medium 🌶️🌶️",
    image: "/images/hero.jpg",
    isChefSpecial: false,
    isJainAvailable: true,
    description: "Aged long-grain Basmati rice sealed in a sealed clay pot with garden fresh vegetables, saffron, rose water, and kewra essence."
  },
  {
    id: 5,
    name: "Malai Kofta Nizam-i",
    category: "Chef's Specials",
    price: 359,
    rating: 4.8,
    reviews: 195,
    spice: "Mild 🌶️",
    image: "/images/paneer.jpg",
    isChefSpecial: false,
    isJainAvailable: true,
    description: "Velvety cottage cheese and cashew dumplings stuffed with dry fruits, simmered in a luscious golden cashew saffron gravy."
  },
  {
    id: 6,
    name: "Tandoori Stuffed Mushroom",
    category: "Paneer & Starters",
    price: 319,
    rating: 4.6,
    reviews: 140,
    spice: "Medium 🌶️🌶️",
    image: "/images/paneer.jpg",
    isChefSpecial: false,
    isJainAvailable: false,
    description: "Plump button mushrooms filled with spiced processed cheese & herbs, baked to golden perfection in clay tandoor."
  },
  {
    id: 7,
    name: "Amritsari Chur Chur Naan Platter",
    category: "Breads & Rice",
    price: 249,
    rating: 4.9,
    reviews: 380,
    spice: "Mild 🌶️",
    image: "/images/thali.jpg",
    isChefSpecial: false,
    isJainAvailable: false,
    description: "Flaky crisp naan stuffed with spiced mashed potatoes & paneer, crushed with pure desi ghee, served with Pindi Chole & Iced Onion salad."
  },
  {
    id: 8,
    name: "Saffron Kesar Rasmalai (2 Pcs)",
    category: "Desserts & Drinks",
    price: 189,
    rating: 4.9,
    reviews: 450,
    spice: "Sweet 🍯",
    image: "/images/thali.jpg",
    isChefSpecial: true,
    isJainAvailable: true,
    description: "Soft cottage cheese discs soaked in cardamom infused rabri, garnished with pistachios, silver leaf (vark) and pure Kashmiri saffron threads."
  },
  {
    id: 9,
    name: "Thakur's Special Masala Chaas",
    category: "Desserts & Drinks",
    price: 99,
    rating: 4.8,
    reviews: 620,
    spice: "Refreshing 🌿",
    image: "/images/hero.jpg",
    isChefSpecial: false,
    isJainAvailable: true,
    description: "Chilled churned yoghurt buttermilk flavoured with roasted cumin, black salt, fresh mint leaves, and green coriander."
  }
];

export default function MenuShowcase({ plate = [], onAddToPlate, onUpdateQuantity, onOpenReservation }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Royal Thalis", "Paneer & Starters", "Chef's Specials", "Breads & Rice", "Desserts & Drinks"];

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="menu"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: '#090e0b'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div className="veg-tag" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} color="#d4af37" />
            <span>EXQUISITE PURE VEG GASTRONOMY</span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '16px'
            }}
          >
            Explore <span className="gold-gradient-text">Thakur.08</span> Signature Menu
          </h2>

          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>
            Every dish is cooked fresh upon order using 100% pure desi ghee, organic whole spices, and milk products sourced daily.
          </p>
        </div>

        {/* Controls Bar: Search & Categories */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '40px'
          }}
        >
          {/* Search Input */}
          <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto', width: '100%' }}>
            <Search
              size={20}
              color="#94a3b8"
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search paneer, thali, biryani, rasmalai..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 48px',
                background: 'rgba(17, 26, 20, 0.9)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '9999px',
                color: '#ffffff',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            />
          </div>

          {/* Category Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: activeCategory === cat ? '1px solid #d4af37' : '1px solid rgba(255,255,255,0.08)',
                  background: activeCategory === cat ? 'linear-gradient(135deg, #d4af37 0%, #b89228 100%)' : 'rgba(255,255,255,0.03)',
                  color: activeCategory === cat ? '#090e0b' : '#cbd5e1',
                  transition: 'all 0.25s ease',
                  boxShadow: activeCategory === cat ? '0 4px 15px rgba(212, 175, 55, 0.3)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredItems.map((item) => {
            const plateItem = plate.find(p => p.id === item.id);
            const quantity = plateItem ? plateItem.quantity : 0;
            return (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {/* Image & Badges */}
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                  />

                  <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
                    <div
                      style={{
                        background: 'rgba(9, 14, 11, 0.85)',
                        backdropFilter: 'blur(8px)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        border: '1px solid rgba(16, 185, 129, 0.4)'
                      }}
                    >
                      <span className="veg-icon-square" />
                      <span style={{ color: '#10b981', fontSize: '0.72rem', fontWeight: 700 }}>100% VEG</span>
                    </div>

                    {item.isJainAvailable && (
                      <div
                        style={{
                          background: 'rgba(212, 175, 55, 0.9)',
                          color: '#090e0b',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          padding: '4px 10px',
                          borderRadius: '6px'
                        }}
                      >
                        Jain Option
                      </div>
                    )}
                  </div>

                  {item.isChefSpecial && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'linear-gradient(135deg, #e67e22, #d35400)',
                        color: '#ffffff',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Flame size={12} />
                      Chef's Choice
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.78rem', color: '#d4af37', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.category}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b', fontSize: '0.85rem', fontWeight: 700 }}>
                      <Star size={14} fill="#f59e0b" />
                      <span>{item.rating}</span>
                      <span style={{ color: '#64748b', fontWeight: 400 }}>({item.reviews})</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
                    {item.name}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '20px', flexGrow: 1 }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Price</span>
                      <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>₹{item.price}</span>
                    </div>

                    {quantity > 0 ? (
                      <div style={{ display: 'flex', alignItems: 'center', background: '#10b981', borderRadius: '9999px', padding: '4px 8px' }}>
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '4px 6px', display: 'flex', alignItems: 'center' }}
                        >
                          <Minus size={14} />
                        </button>
                        <span style={{ fontSize: '0.9rem', fontWeight: 800, padding: '0 8px', color: '#ffffff' }}>
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '4px 6px', display: 'flex', alignItems: 'center' }}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => onAddToPlate(item)}
                        style={{
                          background: 'rgba(212, 175, 55, 0.12)',
                          color: '#d4af37',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                          padding: '10px 18px',
                          borderRadius: '9999px',
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <Plus size={16} />
                        <span>Add to Plate</span>
                      </button>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Pre-Order & Reservation Prompt Banner */}
        <div
          className="glass-card"
          style={{
            marginTop: '56px',
            padding: '32px 40px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(212, 175, 55, 0.08) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
              Planning a Special Dinner or Family Gathering?
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
              Pre-book your table and pre-select your favourite Pure Veg dishes for seamless service without wait times.
            </p>
          </div>

          <button
            onClick={onOpenReservation}
            className="btn-primary"
            style={{ padding: '12px 28px', whiteSpace: 'nowrap' }}
          >
            <ShoppingBag size={18} />
            <span>Book Table & Pre-Select Dish</span>
          </button>
        </div>

      </div>
    </section>
  );
}
