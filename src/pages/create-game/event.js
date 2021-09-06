import { 
  cipherMainInputSaveId, 
  cipherInputClass,
  totalMainInputCharLen
} from "./common.js";

import {
  autoSelectInput, 
  autoFocus
} from "../../lib/utils.js";

import { getHtmlAttributes } from "../../lib/event.js";
import initFunction from "./index.js";

export const eventList = [
  {
    identifier: cipherMainInputSaveId, 
    functionReference: handleMainCipherInputSaveBtnClick 
  },
  {
    identifier: cipherInputClass,
    type: "class",
    name: "keyup",
    functionReference: handleMainCipherInputKeyup
  }
];

function handleMainCipherInputSaveBtnClick(event) {
  event.preventDefault();

  const inputText = getHtmlAttributes(`${cipherInputClass}`)
  const data = Array.from(inputText).map(function(element) {
    return element.value.toUpperCase();
  });

  // console.log({data})
  initFunction({ cipherText: data })

}

function handleMainCipherInputKeyup(event) {
  event.preventDefault();
  const { index } = event.target.dataset;
  const { className } = event.target;

  if( index == totalMainInputCharLen) {
    autoFocus(`${cipherMainInputSaveId}`);
  } else {
    autoSelectInput(`${className}-${+index + 1}`);
  }
}