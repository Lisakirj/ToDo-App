import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import configureAppStore from "./store/store.js";

const { store, persistor } = configureAppStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
