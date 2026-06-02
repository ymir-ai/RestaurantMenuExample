import React from 'react';
import { products } from '../data/products.js';

function Products() {
  return (
    <section className="products-section">
      <h2>Productos</h2>

      <div className="products-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <span>Stock: {product.stock}</span>
              <button type="button">Agregar al carrito</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
