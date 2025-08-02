import { Provider } from "react-redux";
import "./App.css";
import Quiz from "./components/Quiz";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
}

export default App;
