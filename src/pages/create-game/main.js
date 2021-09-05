import createHtmlElement from "../../lib/dom.js";
import dataObject from "./dom-tree.js";
import { page } from "./common.js";

const mainElement = createHtmlElement( dataObject(page) );

export default mainElement;
