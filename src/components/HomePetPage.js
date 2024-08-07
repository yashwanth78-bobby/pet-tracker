// src/components/HomePetPage.jsx
import React from 'react';
import '../HomePetPage.css';

const HomePetPage = () => {
  return (
    <div className="home-pet-page">
      <header className="home-pet-header">
        <h1>Welcome to Our Apartments</h1>
        <p>Find the perfect home for you and your pets</p>
      </header>
      <section className="apartment-features">
        <h2>Apartment Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Spacious Rooms</h3>
            <p>Enjoy roomy and well-lit living spaces that make your home cozy and comfortable.</p>
          </div>
          <div className="feature-card">
            <h3>Pet-Friendly Policies</h3>
            <p>Our apartments welcome pets with open arms, so your furry friends will feel right at home.</p>
          </div>
          <div className="feature-card">
            <h3>Modern Amenities</h3>
            <p>Experience modern living with amenities like a gym, pool, and secure parking.</p>
          </div>
        </div>
      </section>
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>Have questions or want to schedule a visit? Reach out to us:</p>
        <address>
          <p>Email: info@ourapartments.com</p>
          <p>Phone: (123) 456-7890</p>
        </address>
      </section>
    </div>
  );
};

export default HomePetPage;
