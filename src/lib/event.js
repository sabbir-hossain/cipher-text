import { throwError } from "../helper/share.js";

export function createEvent(
  name = throwError("createEvent/name"),
  identifier = throwError("createEvent/identifier"),
  type = throwError("createEvent/type"),
  functionReference = throwError("createEvent/functonReference")
){
  
  if (type === "id") {
    document
      .getElementById(identifier)
      .addEventListener(name, functionReference);
  } 
  else if (type === "class") {

    const className = document.getElementsByClassName(identifier);

    Array.from(className).forEach(function(element) {
      element.addEventListener(name, functionReference);
    });
  }
};

export function createEventListener( eventList = [] ) {

  for (let event of eventList) {
    let { name = "click", identifier, type = "id", functionReference } = event;
    createEvent(name, identifier, type, functionReference);
  }
};

export function getDataAttributes(
  element = throwError("getDataAttributes/element"),
  mapData = {}
) {
  const data = {};
  for (let attribute of element.attributes) {
    if (
      /^(data)\-/.test(attribute.name) &&
      typeof mapData[`${attribute.name}`] !== "undefined"
    ) {
      data[`${mapData[`${attribute.name}`]}`] = attribute.value;
    }
  }
  return data;
};

export function verifyAttribute(
  htmlElement = throwError("verifyAttribute/htmlElement"),
  attribute = {}
) {

  let status = false;
  
  for (let key in attribute) {
    if (htmlElement[`${key}`] === attribute[`${key}`]) {
      status = true;
      break;
    }
  }

  return status;
}

export function getHtmlAttributes(  
  identifier = throwError("getHtmlAttributes/identifier"),
  type = "class"
) {
  console.log({identifier, type})
  
  if (type === "id") {
    return document.getElementById(identifier);
  } 
  else if (type === "class") {

    return document.getElementsByClassName(identifier);
    // Array.from(className).forEach(function(element) {
    //   element.addEventListener(name, functionReference);
    // });
  }
}