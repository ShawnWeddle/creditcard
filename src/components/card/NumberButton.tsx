type NumberButtonProps = {
  children: string;
};

const NumberButton: React.FC<NumberButtonProps> = (
  props: NumberButtonProps
) => {
  const { children } = props;
  return (
    <button className="bg-white text-2xl rounded p-1 px-2 m-1 my-3">
      {children}
    </button>
  );
};

export default NumberButton;
