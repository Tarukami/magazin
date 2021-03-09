import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import ProductMenu from "./ProductMenu";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import fakeData from "./data.config";

function App() {
  const [data] = useState(fakeData);
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({});

  useEffect(() => {
    setCategory(data.categories[0]);
  }, [data]);
  useEffect(() => {
    if (category.products) {
      setProduct(category.products[0]);
    }
    console.log('category changed ' + category.id)
  }, [category]);

  return (
    <div className="app">
      <Header />
      <div className="main">
        <ProductMenu
          category={category}
          product={product}
          setProduct={setProduct}
        />
        <ProductCard product={product} />
      </div>
      <Footer data={data} category={category} setCategory={setCategory} />
    </div>
  );
}

export default App;
