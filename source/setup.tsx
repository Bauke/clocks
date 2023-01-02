import {render} from "preact";

import {App} from "./app.js";

import "modern-normalize/modern-normalize.css";
import "./scss/global.scss";

const preactRoot = document.createElement("div");
document.body.append(preactRoot);
render(<App />, preactRoot);
