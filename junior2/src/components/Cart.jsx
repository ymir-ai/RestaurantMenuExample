import React from 'react';

function Cart() {
  return (
    <aside className="cart-panel">
      <h2>Carrito</h2>
      <p className="empty-text">Todavia no hay productos en el carrito.</p>

      <div className="cart-actions">
        <button type="button">Vaciar carrito</button>
        <button type="button">Comprar</button>
      </div>
    </aside>
  );
}

export default Cart;
