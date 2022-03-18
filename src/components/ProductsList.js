import React from "react";

const ProductsList = ({ products, removeProduct }) => {
  return (
    <ul className="products-list">
      {products.map((product) => (
        <li key={product.id}>
          <ul>
            <li className="title">{product.name}</li>
            <li>
              <b>Categoria: </b> {product.category}
            </li>
            <li>
              <b>Precio: </b> {product.price}
            </li>
            <li>
              <b>Esta disponible: </b>{" "}
              {product.isAvailable ? "disponible" : "Agotado"}
            </li>
          </ul>
          <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
