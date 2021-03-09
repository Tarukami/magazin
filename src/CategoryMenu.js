import "./CategoryMenu.css";
import CategoryButton from "./CategoryButton";

const CategoryMenu = ({ data, category, setCategory }) => {
  return (
    <div className="category-menu flex">
      {data.categories.map((cat) => {
        return (
          <CategoryButton
            active={category.id === cat.id ? "active" : ""}
            key={cat.id}
            id={cat.id}
            title={cat.title}
            picUrl={cat.urlPicture}
            setCategory={setCategory}
            data={data}
          />
        );
      })}
    </div>
  );
};

export default CategoryMenu;
