import NumberButton from "./NumberButton";

const Number: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center p-2">
        <NumberButton>1</NumberButton>
        <NumberButton>2</NumberButton>
        <NumberButton>3</NumberButton>
        <NumberButton>4</NumberButton>
      </div>
      <div className="flex justify-center p-2">
        <NumberButton>1</NumberButton>
        <NumberButton>2</NumberButton>
        <NumberButton>3</NumberButton>
        <NumberButton>4</NumberButton>
      </div>
      <div className="flex justify-center p-2">
        <NumberButton>1</NumberButton>
        <NumberButton>2</NumberButton>
        <NumberButton>3</NumberButton>
        <NumberButton>4</NumberButton>
      </div>
      <div className="flex justify-center p-2">
        <NumberButton>1</NumberButton>
        <NumberButton>2</NumberButton>
        <NumberButton>3</NumberButton>
        <NumberButton>4</NumberButton>
      </div>
    </div>
  );
};

export default Number;
