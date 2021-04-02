import { Provider } from "react-redux";
import { store } from "./state";
import ItemList from "./ItemList";

function App() {
  return (
    <Provider store={store}>
      <ItemList />
    </Provider>
  );
}

export default App;
