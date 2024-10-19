import { useCartContext } from "../store/cart-context";

type ProductButtonProps = {
  label: string;
  price: number;
  onClick?: (label: string, price: number) => void;
};

export const ProductButton = ({
  label,
  price,
  onClick,
}: ProductButtonProps) => {
  const { addItem } = useCartContext();

  const handleProductClick = () => {
    addItem({ name: label, price });
  };

  return (
    <div style={{ display: "flex", gap: 16 }}>
      <p>{label}</p>
      <p>Price: ${price}</p>
      <button onClick={handleProductClick}>Add</button>
    </div>
  );
};
