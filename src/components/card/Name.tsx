import NumberButton from "./NumberButton";

const Name: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <span className="font-bold text-lg -my-1.5">NAME ON</span>
        <span className="font-bold text-lg -my-1.5">CARD</span>
      </div>
      <NumberButton>___ _____</NumberButton>
    </div>
  );
};

export default Name;
