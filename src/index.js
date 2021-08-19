import React from "react";
import ReactDOM from "react-dom";

import { Game } from "./Game";

ReactDOM.render(
  <React.StrictMode>
    <h1>TIC-TAC-TOE</h1>
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);
