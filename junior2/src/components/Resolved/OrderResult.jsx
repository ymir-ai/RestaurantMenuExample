import React from 'react';

function OrderResult({ order }) {
  if (!order) {
    return null;
  }

  return (
    <section className="order-result">
      <h2>Ultima compra</h2>
      <p>Orden #{order.id}</p>
      <p>Fecha: {order.date}</p>

      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity}
          </li>
        ))}
      </ul>

      <strong>Total: ${order.total}</strong>
    </section>
  );
}

export default OrderResult;
