import { createTitle } from "./title";
import { createHome } from "./home.js";
import { createFooter } from "./footer";
import "./styles.css";

let content = document.getElementById("content");
createTitle(content);
createHome(content);
createFooter(content);
