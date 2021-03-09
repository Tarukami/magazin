import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const {title, price, feature, urlPicture} = product
  return (
    <div className="product-card bg-dark-grey text-white">
      {urlPicture ? (
        <div
          className="product-card__img"
          style={{ backgroundImage: `url(${urlPicture})` }}
        ></div>
      ) : (
        <div className="product-card__img">Нет изображения</div>
      )}
      <div className="product-card__description">
        <h3>{title}</h3>
        <p className="price">{price} RUB</p>
        <p>{feature}</p>
      </div>
    </div>
  );
};

export default ProductCard;
