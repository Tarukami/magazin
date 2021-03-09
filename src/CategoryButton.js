import "./CategoryButton.css";

const CategoryButton = ({title, picUrl, id, setCategory, active, data}) => {

  function handleClick() {
    setCategory(data.categories[id])
  }

  return (
    <div className={`category-button flex text-white ${active}`} onClick={handleClick}>
      <div
        className="button-picture"
        style={{backgroundImage:`url(${picUrl})`}}
      ></div>
      <span>{title}</span>
    </div>
  );
};
export default CategoryButton;
