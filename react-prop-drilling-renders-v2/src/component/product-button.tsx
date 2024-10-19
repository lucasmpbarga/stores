import { Item } from "./cart";

type ProductButtonProps = {
  label: string;
  price: number;
  onClick?: (item: Item) => void;
};

export const ProductButton = ({
  label,
  price,
  onClick,
}: ProductButtonProps) => {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <p>{label}</p>
      <p>Price: ${price}</p>
      <button
        onClick={() => {
          onClick && onClick({ label, price });
        }}
      >
        Add
      </button>
    </div>
  );
};
