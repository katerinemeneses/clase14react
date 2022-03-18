import React from "react";
import { useState } from "react";

const ProductsForm = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const product = {
      id: Date.now(),
      name,
      category,
      price,
      isAvailable: isAvailable
    };
    addProduct(product);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="input-container">
          <label htmlFor="category">Categoría</label>
          <input
            type="text"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>

        <div className="input-container">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>

        <div className="input-container">
          <label htmlFor="isAvailable">Está disponible</label>
          <input
            type="checkbox"
            id="isAvailable"
            onChange={(e) => setIsAvailable(e.target.checked)}
            checked={isAvailable}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductsForm;