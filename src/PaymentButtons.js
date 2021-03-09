import Button from "./Button"

const PaymentButtons = () => {
  return (
    <div className="payment-buttons flex">
      <Button title="Наличка"/>
      <Button title="Карта"/>
    </div>
  );
};

export default PaymentButtons;
