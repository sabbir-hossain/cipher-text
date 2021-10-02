import { 
  cipherMainInputSaveId, 
  // cipherWordGenerateId,
  cipherMainHintId,
  inviteByEmailId,
  
  cipherInputClass,
  hintInputClass,

  hintInputOptClass
  // totalMainInputCharLen
} from "./common.js";

import {
  handleMainHintChange,
  handleFocusInputKeyup,
  handleWordInputFocus,
  handleMainCipherInputSaveBtnClick,
  handleWordOptChange,
  handleInviteByEmailBtn,
} from "./event-handle.js"

export const eventList = [
  {
    identifier: cipherMainInputSaveId, 
    functionReference: handleMainCipherInputSaveBtnClick 
  },
  {
    identifier: cipherMainHintId,
    name: "change",
    functionReference: handleMainHintChange
  },
  {
    identifier: cipherInputClass,
    type: "class",
    name: "keyup",
    functionReference: handleFocusInputKeyup
  },
  {
    identifier: inviteByEmailId,
    functionReference: handleInviteByEmailBtn
  }
];

export const WordEventList = [
  {
    identifier: hintInputClass,
    type: "class",
    name: "keyup",
    functionReference: handleWordInputFocus 
  },
  {
    identifier: hintInputOptClass,
    type: "class",
    name: "change",
    functionReference: handleWordOptChange
  }
]