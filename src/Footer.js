import "./Footer.css";
import CategoryMenu from "./CategoryMenu";
import PaymentButtons from "./PaymentButtons";

const Footer = ({ data, category, setCategory }) => {
  return (
    <footer className="footer flex bg-grey">
      <CategoryMenu data={data} category={category} setCategory={setCategory} />
      <PaymentButtons />
    </footer>
  );
};
export default Footer;
