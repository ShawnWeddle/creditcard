import Main from "./components/main/Main";
import DialogMain from "./components/dialog/Dialog";

function App() {
  return (
    <div className="bg-gray-500 min-h-screen flex justify-center">
      <div className="w-full py-14 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
        <DialogMain />
        <Main />
      </div>
    </div>
  );
}

export default App;
