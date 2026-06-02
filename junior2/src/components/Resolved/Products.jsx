import React from 'react';

function Products({ products, onAddToCart }) {
  return (
    <section className="products-section">
      <h2>Productos</h2>

      <div className="products-grid">
        {products.map(({ id, name, price, stock, image }) => (
          <article className="product-card" key={id}>
            <img src={image} alt={name} />
            <div className="product-info">
              <h3>{name}</h3>
              <p>${price}</p>
              <span>Stock: {stock}</span>
              <button
                type="button"
                onClick={() => onAddToCart({ id, name, price, stock, image })}
              >
                Agregar al carrito
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
