import React, { useEffect, useState } from 'react';
import { products } from '../../data/products.js';
import Products from './Products.jsx';
import Cart from './Cart.jsx';
import Notification from './Notification.jsx';
import OrderResult from './OrderResult.jsx';

function FirstPage() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });
  const [message, setMessage] = useState('');
  const [lastOrder, setLastOrder] = useState(() => {
    return JSON.parse(localStorage.getItem('lastOrder')) || null;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function showMessage(text) {
    setMessage(text);
    setTimeout(() => {
      setMessage('');
    }, 2500);
  }

  function addToCart(product) {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    showMessage('Producto agregado al carrito');
  }

  function increaseQuantity(productId) {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(productId) {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function removeFromCart(productId) {
    setCart(cart.filter((item) => item.id !== productId));
    showMessage('Producto eliminado');
  }

  function clearCart() {
    setCart([]);
    showMessage('Carrito vacio');
  }

  function buyProducts() {
    if (cart.length === 0) {
      showMessage('No hay productos para comprar');
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const order = {
      id: Date.now(),
      items: cart,
      total,
      date: new Date().toLocaleString()
    };

    localStorage.setItem('lastOrder', JSON.stringify(order));
    setLastOrder(order);
    setCart([]);
    showMessage('Compra realizada con exito');
  }

  return (
    <main className="store-page">
      <header className="store-header">
        <div>
          <p className="eyebrow">Practica React resuelta</p>
          <h1>Ecommerce Basico</h1>
        </div>
      </header>

      <Notification message={message} />

      <section className="store-layout">
        <Products products={products} onAddToCart={addToCart} />
        <Cart
          cart={cart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onClear={clearCart}
          onBuy={buyProducts}
        />
      </section>

      <OrderResult order={lastOrder} />
    </main>
  );
}

export default FirstPage;
