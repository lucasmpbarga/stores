import { useCartContext } from "@/app/store/cart-context";

export const DonateButton = () => {
  const { addDonation } = useCartContext();

  const handleClick = () => {
    addDonation(10);
  };

  return <button onClick={handleClick}>Add $10 Donate</button>;
};
