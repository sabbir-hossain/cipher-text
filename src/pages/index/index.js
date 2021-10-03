import "../../services/firebase-setup.js";

import { page, canvasId, mainContentClass } from "./common.js";
import createHtmlElement from "../../lib/dom.js";

import headerObject from "../../layout/header.js";
import footerObject from "../../layout/footer.js";

import { mainInputObject } from "./dom-tree.js";
import { drawCanvas } from "./canvas.js";
import canvasEvent from "./canvas-event.js";
import loaderObject from "./loader.js";
import { removeAllChildElement } from "../../lib/dom.js";

export default async function initFunction(options = {}) {

  const urlParams = new URLSearchParams(window.location.search);
  options._id = urlParams.get('id');

  try {
    document.body.appendChild( createHtmlElement( headerObject(page) ) );
  
    document.body.appendChild( createHtmlElement( loaderObject(page) ) );
  
    const { wordList, domObject } = await mainInputObject(options);
  
    const element = document.getElementsByClassName(mainContentClass)[0];
    removeAllChildElement(element);
    element.remove();
  
    document.body.appendChild( createHtmlElement( domObject  ));
    document.body.appendChild( createHtmlElement( footerObject(page) ));
  
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    console.log({wordList})
    drawCanvas(ctx, wordList);
  
    canvasEvent(canvas, ctx);
  }
  catch(error) {
    console.error(error);
  }
}

initFunction({ });
