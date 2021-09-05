import createHtmlElement from "../../lib/dom.js";
import { page } from "./common.js";
import footerObject from "../../layout/footer.js";

const footerElement = createHtmlElement( footerObject(page) );

export default footerElement;