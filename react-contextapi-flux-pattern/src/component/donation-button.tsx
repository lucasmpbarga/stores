// import { useCartContext } from "@/app/store/cart-context";

import { addDonate } from "@/store/cart-store/cart.action";
import { useStore } from "@/store/store";

export const DonateButton = () => {
  const { dispatch } = useStore();

  const handleClick = () => {
    dispatch(addDonate({ name: "Donate", price: 10 }));
  };

  return <button onClick={handleClick}>Add $10 Donate</button>;
};
