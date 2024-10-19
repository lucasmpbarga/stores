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
  const handleClick = () => {
    if (onClick) {
      onClick(label, price);
    }
  };

  return (
    <div style={{ display: "flex", gap: 16 }}>
      <p>{label}</p>
      <p>Price: ${price}</p>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
