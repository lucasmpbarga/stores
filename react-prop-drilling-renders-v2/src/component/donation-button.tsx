type DonateButtonProps = {
  onClick?: () => void;
};

export const DonateButton = ({ onClick }: DonateButtonProps) => {
  return <button onClick={onClick}>Add $10 Donate</button>;
};
