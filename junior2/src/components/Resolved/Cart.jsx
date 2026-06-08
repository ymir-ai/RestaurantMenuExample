import React from 'react';

function Cart({ cart, onIncrease, onDecrease, onRemove, onClear, onBuy }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <aside className="cart-panel">
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p className="empty-text">Todavia no hay productos en el carrito.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>${item.price * item.quantity}</p>
              </div>

              <div className="quantity-controls">
                <button type="button" onClick={() => onDecrease(item.id)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => onIncrease(item.id)}>
                  +
                </button>
              </div>

              <button type="button" onClick={() => onRemove(item.id)}>
                Eliminar
              </button>
            </article>
          ))}
        </div>
      )}

      <strong className="cart-total">Total: ${total}</strong>

      <div className="cart-actions">
        <button type="button" onClick={onClear}>
          Vaciar carrito
        </button>
        <button type="button" onClick={onBuy}>
          Comprar
        </button>
      </div>
    </aside>
  );
}

export default Cart;
