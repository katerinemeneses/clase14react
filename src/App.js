import { useState } from "react";
import ProductsForm from "./components/ProductsForm";
import ProductsList from "./components/ProductsList";
import "./App.css";

function App() {
  const productsDefault = [
    {
      id: 1,
      name: "Pollo frito",
      category: "Comida",
      price: 2,
      isAvailable: true
    },
    {
      id: 2,
      name: "Jabón",
      category: "higiene",
      price: 3,
      isAvailable: false
    }
  ];

  const [products, setProducts] = useState(productsDefault);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="App">
      <ProductsForm addProduct={addProduct} />
      <ProductsList products={products} removeProduct={removeProduct} />
    </div>
  );
}

export default App;