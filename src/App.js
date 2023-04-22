import "./App.css";
import UseStateTutorial from "./components/useStateTutorial";
import UseReducerTutorial from "./components/useReducerTutorial";
import UseEffectTutorial from "./components/useEffectTutorial";
import UseRefTutorial from "./components/useRefTutorial";
import UseLayoutEffectTutorial from "./components/useLayoutEffectTutorial";
import UseImperativeHandleTutorial from "./components/useImperativeHandle";
import UseContextTutorial from "./components/useContextTutorial";

function App() {
  return (
    <div className="App">
      <UseStateTutorial />
      <UseReducerTutorial />
      <UseEffectTutorial />
      <UseRefTutorial />
      <UseLayoutEffectTutorial />
      <UseImperativeHandleTutorial />
      <UseContextTutorial />
    </div>
  );
}

export default App;
