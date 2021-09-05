import { cipherMainInputSaveId, cipherInputClass, totalMainInputCharLen } from "./common.js";

const generateMainInput = (length=0, className=cipherInputClass) => Array.from({length}).map((_, input) => ({
  name: `input.${className}`,
  attributes: {
    id: `${className}-${input + 1}`,
    placeholder: input + 1,
    maxlength: 1,
    size: 1,
    [`data-index`]: input + 1
  }
}))

export const mainInputObject = () => {
  return {
    name: "main.main-contents",
    childElement: [
      {
        name: "div.cipher-main",
        childElement: [
          {
            name: "div.cipher-main-title",
            text: "Enter cipher text (5-6 characters) : ",
          },
          {
            name: "div.cipher-main-input-div",
            childElement: generateMainInput(totalMainInputCharLen)
          },
          {
            name: "button.cipher-main-input-btn",
            text: "save",
            attributes: {
              id: cipherMainInputSaveId
            }
          }
        ]
      }
    ]
  }
};
