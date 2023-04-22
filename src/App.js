import logo from "./logo.svg";
import "./App.css";
import UseStateTutorial from "./components/useStateTutorial";
import UseReducerTutorial from "./components/useReducerTutorial";
import UseEffectTutorial from "./components/useEffectTutorial";
import UseRefTutorial from "./components/useRefTutorial";

function App() {
  return (
    <div className="App">
      <UseStateTutorial />
      <UseReducerTutorial />
      <UseEffectTutorial />
      <UseRefTutorial />
    </div>
  );
}

export default App;
