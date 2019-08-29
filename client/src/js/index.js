/**
 * @fileoverview Main file of the app, entry point for webpack config file.
 *
 * @version 1.0.0
 *
 * @author Jesus Ramirez <jar170396@gmail.com>
 *
 * @copyright MIT License
 */

import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
