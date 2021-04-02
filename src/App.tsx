import { Provider } from "react-redux";
import { store } from "./state";

function App() {
  return (
    <Provider store={store}>
      <div className="App">doge approved</div>
    </Provider>
  );
}

export default App;
