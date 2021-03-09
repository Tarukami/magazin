import "./ProductMenu.css";
import ProductButton from "./ProductButton";

const ProductMenu = ({ product, category, setProduct }) => {
  const products = category.products || [];

  return (
    <ul className="product-menu bg-dark-grey">
      {products.map(({ title, id, urlPicture }) => {
        return (
          <ProductButton
            title={title}
            active={product.id === id ? "active" : ""}
            changeProduct={() => setProduct(category.products[id])}
            urlPic={urlPicture}
          />
        );
      })}
    </ul>
  );
};
export default ProductMenu;
