import { 
  allWordDivId,
  // cipherMainInputSaveId, 
  // cipherWordGenerateId,
  // cipherMainHintId,
  
  cipherInputClass,
  // hintInputClass,
  // totalMainInputCharLen
} from "./common.js";

import { 
  autoFocus
} from "../../lib/utils.js";
import { createEventListener } from "../../lib/event.js";

import { getHtmlAttributes } from "../../lib/event.js";
import { removeAllChildElement, createHtmlChildElement } from "../../lib/dom.js";

import { allWordContentObject } from "./dom-tree.js";
import { WordEventList } from "./event.js";

import { savePuzzles, updatePuzzles } from "../../services/create.js";

const data = {};

console.log("init data :: ", { data });

export function handleMainHintChange(event) {
  event.preventDefault();
  const val = event.target.value;
  // console.log({val, event});
  data["cipherHint"] = event.target.value || "";
}

export async function handleMainCipherInputSaveBtnClick(event) {
  event.preventDefault();

  const inputText = getHtmlAttributes(`${cipherInputClass}`)
  const dt = Array.from(inputText).map(function(element) {
    return element.value.toUpperCase();
  }).filter(val => val.trim() !== "");

  data["cipher"] = dt;
  // console.log({data});

  const result = await savePuzzles(data);

  // console.log("handleMainCipherInputSaveBtnClick : ", {result})

  data["id"] = result.id;

  const allWordListElement = document.getElementById(allWordDivId);
  removeAllChildElement(allWordListElement);

  const generateWordListElement = allWordContentObject({  cipherText: data["cipher"] });

  createHtmlChildElement( allWordListElement, generateWordListElement.childElement );

  createEventListener(WordEventList);

  autoFocus(`word-input-1-1`);

  // const wordContent = createHtmlElement( allWordContentObject({  cipherText: data["cipher"] }) );

  // allWordListElement.appendChild( wordContent )

  // console.log("allWordListElement: ", allWordListElement);
  // console.log("allWordContentObject: ", allWordContentObject({  cipherText: data["cipher"] }));
  // createHtmlChildElement( othersProjectElement, htmlObjectList.childElement );
  // createHtmlChildElement(allWordListElement, );
  
  // const mainHintDiv = getHtmlAttributes(`${cipherMainHintId}`)

  // console.log({data})
  // initFunction({ cipherText: data["cipher"] })
}

export function handleFocusInputKeyup(event) {
  event.preventDefault();
  const { nextId } = event.target.dataset;
  autoFocus(`${nextId}`);
}

export function handleMainCipherInputKeyup(event) {
  event.preventDefault();
  const { index, nextId } = event.target.dataset;
  // const { className } = event.target;

  // console.log({index, nextId,className, dt: event.target.dataset })

  // if( index == totalMainInputCharLen) {
  //  autoFocus(`${nextId}`);
  // } else {
  //   autoSelectInput(`${className}-${+index + 1}`);
  // }
}

export async function handleWordInputFocus(event) {
  event.preventDefault();
  const value = event.target.value;
  
  if( value && value !== "") {
    const { nextId, index } = event.target.dataset;

    data["wordData"] = data["wordData"] || {};
    data["wordData"][index] = data["wordData"][index] || {};

    data["wordData"][index].text = data["wordData"][index].text || []
    data["wordData"][index].text.push(value);

    const result = await updatePuzzles(data["id"], data);

    // console.log(data);
    autoFocus(`${nextId}`);
  }
}

export async function handleWordOptChange(event) {
  event.preventDefault();
  const value = event.target.value;

  const { nextId, index } = event.target.dataset;

  if( value && value !== "") {
    data["wordData"] = data["wordData"] || {};
    data["wordData"][index] = data["wordData"][index] || {};
    data["wordData"][index].hint = value;
    // console.log(data);

    const result = await updatePuzzles(data["id"], data);
  }
  autoFocus(`${nextId}`);
}