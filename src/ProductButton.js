import "./ProductButton.css"

const ProductButton = ({ title, id, changeProduct, urlPic, active }) => {

  const style = urlPic
    ? { backgroundImage: `url(${urlPic})` }
    : { background: "#555" };

  return (
    <li className={`product-menu__item ${active}`} onClick={changeProduct}>
      <div className="img" style={style}></div>
      <span className="text-white">{title}</span>
    </li>
  );
};

export default ProductButton;
