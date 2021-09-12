import "../../services/firebase-setup.js";

import { page } from "./common.js";

import createHtmlElement from "../../lib/dom.js";

import headerObject from "../../layout/header.js";
import footerObject from "../../layout/footer.js";

import { mainInputObject } from "./dom-tree.js";

export default async function initFunction(options = {}) {

  document.body.appendChild( createHtmlElement( headerObject(page) ) );

  document.body.appendChild( createHtmlElement(  await  mainInputObject(options)  ));


  document.body.appendChild(createHtmlElement( footerObject(page) ));

  // createEventListener(eventList);
}

// cipherText: ["F", "R", "E", "Y", "J", "A"]
initFunction({ });
