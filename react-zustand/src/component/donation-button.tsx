// import { useCartContext } from "@/app/store/cart-context";

import { useCartStore } from "@/store/cart-store";

export const DonateButton = () => {
  const { addDonate } = useCartStore();

  const handleClick = () => {
    addDonate();
  };

  return <button onClick={handleClick}>Add $10 Donate</button>;
};
