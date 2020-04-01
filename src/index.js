if (process.env.NODE_ENV === "development") {
  require("preact/debug");
}

import "./style/index.scss";
import App from "./components/app";

export default App;
