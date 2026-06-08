import React from 'react';
import Products from './Products.jsx';
import Cart from './Cart.jsx';
import Notification from './Notification.jsx';

function FirstPage() {
  return (
    <main className="store-page">
      <header className="store-header">
        <div>
          <p className="eyebrow">Practica React</p>
          <h1>Ecommerce Basico</h1>
        </div>
      </header>

      <Notification />

      <section className="store-layout">
        <Products />
        <Cart />
      </section>
    </main>
  );
}

export default FirstPage;
