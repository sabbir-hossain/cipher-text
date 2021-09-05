import createHtmlElement from "../../lib/dom.js";

import headerObject from "../../layout/header.js";

const headerElement = createHtmlElement( headerObject("play") );

document.body.appendChild(headerElement);