// import { useCartContext } from "@/app/store/cart-context";

import { addDonate, store } from "@/store/store";

export const DonateButton = () => {
  const handleClick = () => {
    store.dispatch(addDonate(10));
  };

  return <button onClick={handleClick}>Add $10 Donate</button>;
};
