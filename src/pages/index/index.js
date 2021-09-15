import "../../services/firebase-setup.js";

import { page, canvasId } from "./common.js";
import createHtmlElement from "../../lib/dom.js";

import headerObject from "../../layout/header.js";
import footerObject from "../../layout/footer.js";

import { mainInputObject } from "./dom-tree.js";
import { drawCanvas } from "./canvas.js";
import canvasEvent from "./canvas-event.js";

export default async function initFunction(options = {}) {

  document.body.appendChild( createHtmlElement( headerObject(page) ) );

  const { wordList, domObject } = await mainInputObject(options);
  document.body.appendChild( createHtmlElement( domObject  ));
  document.body.appendChild( createHtmlElement( footerObject(page) ));

  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  
  drawCanvas(ctx, wordList);

  canvasEvent(canvas, ctx);
}

// cipherText: ["F", "R", "E", "Y", "J", "A"]
initFunction({ });
