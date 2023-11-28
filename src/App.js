
import './App.css';
import MemoHook from "./Components/useMemoEx1";
import CallbackHook from "./Components/useCallbackEx1";
import Counter from "./Components/UseReducerEx01";

function App() {
  return (
    <div>
    <MemoHook />
    <CallbackHook />
    <Counter />
    </div>
  );
}

export default App;
