import createHtmlElement from "../../lib/dom.js";
import { page } from "./common.js";
import headerObject from "../../layout/header.js";

const headerElement = createHtmlElement( headerObject(page) );

export default headerElement;