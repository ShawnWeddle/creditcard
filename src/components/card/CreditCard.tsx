import Name from "./Name";
import Number from "./Number";
import CVV from "./CVV";
import ExpDate from "./ExpDate";

const CreditCard: React.FC = () => {
  return (
    <div className="w-full font-mono rounded-2xl shadow-2xl aspect-video bg-radial from-fuchsia-600 via-purple-600 to-violet-600 md:max-w-screen-sm lg:max-w-screen-md flex-col flex justify-between">
      <div className="text-right text-yellow-300 font-bold text-2xl p-2">
        BANK
      </div>
      <div>
        <Number />
        <div className="flex justify-around">
          <ExpDate />
          <CVV />
        </div>
        <div className="flex justify-around">
          <Name />
          <div>{"" /*EMPTY DIV*/}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;

/*
<div className="flex justify-start">
        <div className="flex justify-center p-2">
          <div className="bg-white p-2 m-1 rounded-sm text-xl">1</div>
          <div className="bg-white p-2 m-1 rounded-sm text-xl">2</div>
          <div className="bg-white p-2 m-1 rounded-sm text-xl">3</div>
          <div className="bg-white p-2 m-1 rounded-sm text-xl">4</div>
        </div>
        <div className="flex justify-center p-2">
          <div className="bg-white p-2 m-1 rounded-sm text-xl">1</div>
          <div className="bg-white p-2 m-1 rounded-sm text-xl">2</div>
          <div className="bg-white p-2 m-1 rounded-sm text-xl">3</div>
          <div className="bg-white p-2 m-1 rounded-sm text-xl">4</div>
        </div>
        <div className="flex justify-center p-2">
          <div className="bg-white p-2 m-1 rounded-sm text-xl">1</div>
          <div className="bg-white p-2 m-1 rounded-sm text-xl">2</div>
          <div className="bg-white p-2 m-1 rounded-sm text-xl">3</div>
          <div className="bg-white p-2 m-1 rounded-sm text-xl">4</div>
        </div>
        <div className="flex justify-center p-2">
          <div className="bg-white p-2 m-1 rounded-sm text-xl">1</div>
          <div className="bg-white p-2 m-1 rounded-sm text-xl">2</div>
          <div className="bg-white p-2 m-1 rounded-sm text-xl">3</div>
          <div className="bg-white p-2 m-1 rounded-sm text-xl">4</div>
        </div>
      </div>
      <div className="flex justify-start">
        Good thru
        <div className="bg-white p-2 m-1 rounded-sm text-xl">0</div>
        <div className="bg-white p-2 m-1 rounded-sm text-xl">1</div> /
        <div className="bg-white p-2 m-1 rounded-sm text-xl">2</div>
        <div className="bg-white p-2 m-1 rounded-sm text-xl">3</div>
        CVV
        <div className="bg-white p-2 m-1 rounded-sm text-xl">4</div>
        <div className="bg-white p-2 m-1 rounded-sm text-xl">5</div>
        <div className="bg-white p-2 m-1 rounded-sm text-xl">6</div>
      </div>
      <div className="flex justify-start">
        Name on card{" "}
        <div className="bg-white p-2 m-1 rounded-sm text-xl">_</div>
      </div>
*/
