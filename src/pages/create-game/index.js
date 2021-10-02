import "../../services/firebase-setup.js";

import { createEventListener } from "../../lib/event.js";
import { cipherInputClass } from "./common.js";
import { autoSelectInput } from "../../lib/utils.js";

import createHtmlElement from "../../lib/dom.js";
import { page } from "./common.js";

import { eventList } from "./event.js";
import { mainInputObject } from "./dom-tree.js";

import headerObject from "../../layout/header.js";
import footerObject from "../../layout/footer.js";

export default function initFunction(options = {}) {

  document.body.appendChild( createHtmlElement( headerObject(page) ));
  document.body.appendChild( createHtmlElement( mainInputObject(options) ));
  document.body.appendChild( createHtmlElement( footerObject(page) ));

  createEventListener(eventList);
  autoSelectInput(`${cipherInputClass}-1`)
}

initFunction({ });

