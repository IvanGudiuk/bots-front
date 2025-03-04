import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Components/App/App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
// import { persistor, store } from "./redux/store";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  // <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </PersistGate>
  /* </Provider> */
);
