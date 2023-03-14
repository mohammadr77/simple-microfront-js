import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const mount = (el) => {
  const root = ReactDOM.createRoot(el);
  root.render(<App />);

  //   ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_dev-marketing");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
