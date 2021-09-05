import { throwError } from "../helper/share.js";

export function removeAllChildElement(
  htmlElement = throwError("removeAllChildElement")
) {
  while (htmlElement.hasChildNodes()) {
    htmlElement.removeChild(htmlElement.lastChild);
  }
  return htmlElement;
};

export function setHtmlElement(
  htmlElement = throwError("setHtmlElement"),
  obj
){
  for (let key in obj) {
    htmlElement.setAttribute(key, obj[key]);
  }
  return htmlElement;
};

export function createTextElement(
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

  const domElm = name.split(".");

  let element = document.createElement(domElm[0]);
  text && createTextElement(element, text);

  Object.assign(attributes, { 
    class: domElm[1] ? domElm[1] : attributes.class || "" 
  })
  setHtmlElement(element, attributes);

  childElement.length !== 0 &&
    createHtmlChildElement(element, childElement);

  return element;
};