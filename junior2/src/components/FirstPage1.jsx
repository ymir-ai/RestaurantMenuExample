import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Mouse", price: 20, stock: 5 },
    { id: 2, name: "Teclado", price: 40, stock: 3 },
    { id: 3, name: "Monitor", price: 200, stock: 1 },
    { id: 4, name: "Auriculares", price: 80, stock: 7 },
  ]);
  const [total, setTotal] = useState();
  const [add, setAdd] = useState("");
  const [modal, setModal] = useState(null);
  const [editPrice, setEditPrice] = useState("");
  const [editStock, setEditStock] = useState();

  function addQuantity(id) {
    setProducts((products) =>
      products.map((product) =>
        product.id === id ? { ...product, stock: product.stock + 1 } : product,
      ),
    );
  }
  function subtractQuantity(id) {
    setProducts((products) =>
      products.map((product) =>
        product.id === id ? { ...product, stock: product.stock - 1 } : product,
      ),
    );
  }

  function deleteProduct(id) {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  }

  function addProduct() {
    if (!add.trim()) {
      return;
    }

    const newProduct = {
      name: add,
      id: products.length + 1,
      price: 0,
      stock: 0,
    };
    setProducts((prev) => [...prev, newProduct]);
    setAdd("");
  }

  function editProduct(id) {
    const productToEdit = products.find((product) => product.id === id);
    setModal(productToEdit);
    setEditPrice(productToEdit.price);
    setEditStock(productToEdit.stock);
    return id
      ? id
      : null; /* Siempre usa una función más para que no quede vacío. */
  }

  function calculateTotal() {
    const totalCost = products.reduce(
      (accumulator, product) => accumulator + product.price * product.stock,
      0,
    );
    setTotal(totalCost);
  }
  return (
    <>
      <h2>Cart</h2>
      {products.map((product) => (
        <ul key={product.id}>
          <li>{product.name}</li>
          <li>Stock: {product.stock}</li>
          <li>Unity price: {product.price}</li>
          <li>Total Price: {total} </li>
          <button onClick={() => editProduct(product.id)}>Edit Product</button>
          <button onClick={() => addQuantity(product.id)}>+</button>{" "}
          <button onClick={() => subtractQuantity(product.id)}>-</button>
        </ul>
      ))}
      <button onClick={calculateTotal}>Calcular total</button>
      <p>Total = ${total}</p>

      <input
        type="text"
        value={add}
        onChange={(e) => setAdd(e.target.value)}
        placeholder="Add a new one"
      />
      <button onClick={() => addProduct()}>Add New Product</button>
      {modal && (
        <>
          <div key={modal.id}>
            <h2>{modal.name}</h2>
            <h3>Modifica el Precio</h3>
            <input
              type="number"
              value={editPrice}
              placeholder="Changing Costs..."
              onChange={(e) => setEditPrice(Number(e.target.value))}
            />
            <h3>Modifica el Stock</h3>
            <input
              type="number"
              value={editStock}
              onChange={(e) => setEditStock(Number(e.target.value))}
              placeholder="So many stock..."
            />
          </div>
        </>
      )}
    </>
  );
}
export default App;
