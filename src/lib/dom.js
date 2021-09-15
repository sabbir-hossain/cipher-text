import { throwError } from "../helper/share.js";

export function removeAllChildElement(
  htmlElement = throwError("removeAllChildElement")
) {
  while (htmlElement.hasChildNodes()) {
    htmlElement.removeChild(htmlElement.lastChild);
  }
  return htmlElement;
};

function setHtmlElement(
  htmlElement = throwError("setHtmlElement"),
  obj
){
  for (let key in obj) {
    obj[key] && htmlElement.setAttribute(key, obj[key]);
  }
  return htmlElement;
};

function createTextElement(
  htmlElement = throwError("createTextElement"),
  text = null
){
  const textNode = document.createTextNode(text);
  htmlElement.appendChild(textNode);
  return htmlElement;
};

export function createHtmlChildElement(
  element = throwError("createHtmlChildElement"),
  childElement = []
) {

  for (let child of childElement) {
    if( child?.isHide) {
      continue;
    }

    // const childData = createHtmlElement(child);
    element.appendChild( createHtmlElement(child) );
  }

  return element;
};


export default function createHtmlElement(htmlObject = throwError("createHtmlElement") ) {

  const {
    name = throwError("createHtmlElement/name"),
    text = null,
    attributes = {},
    childElement = []
  } = htmlObject;

  if( attributes?.isHide ) {
    return;
  }

  const domElm = name.split(".");

  let element = document.createElement(domElm[0] || "div");
  text && createTextElement(element, text);

  const classList = domElm.slice(1);

  Object.assign(attributes, { 
    class: classList.length > 0 ? classList.join(" ") : attributes.class || "" 
  })
  setHtmlElement(element, attributes);

  childElement.length !== 0 &&
    createHtmlChildElement(element, childElement);

  return element;
};