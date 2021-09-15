import { 
  allWordDivId,
  cipherMainInputSaveId, 
  cipherWordGenerateId,
  cipherMainHintId,

  cipherInputClass, 
  hintInputClass, 
  hintInputOptClass,
  
  totalMainInputCharLen 
} from "./common.js";
import { generateInputList } from "../../lib/generate.js";

import charData from "../../data/index.js";

export const mainInputObject = (options = {}) => {
  return {
    name: "main.main-contents",
    childElement: [
      {
        name: ".cipher-main",
        childElement: [
          {
            name: ".cipher-main-title",
            text: "Enter cipher text (max 6 characters) : ",
          },
          {
            name: ".cipher-main-input-div",
            childElement: generateInputList(
              totalMainInputCharLen, 
              cipherInputClass,
              {
                attributeData: {
                  maxlength: 1,
                  size: 1
                },
                dataList: [
                  { key: "index", valueFunc: ({_i}) => `${_i + 1}` },
                  {
                    key: "next-id",
                    valueFunc: ({_i}) => _i !== (totalMainInputCharLen-1) ? `cipher-main-input-${_i + 2}` : cipherMainHintId
                  }
                ]
              }
            )
          },
          {
            name: "input.cipher-main-hint",
            attributes: {
              placeholder: "hints (optional)",
              id: cipherMainHintId
            }
          },
          {
            name: "button.cipher-main-input-btn",
            attributes: {
              id: cipherMainInputSaveId
            },
            childElement: [
              {
                name: "img.btn-icon",
                attributes: {
                  src: "./assets/verified.svg"
                }
              },
              {
                name: "span.btn-text",
                text: "save"
              }
            ]
          },
          // {
          //   name: "button.cipher-main-input-btn",
          //   attributes: {
          //     id: cipherWordGenerateId
          //   },
          //   childElement: [
          //     {
          //       name: "img.btn-icon",
          //       attributes: {
          //         src: "./assets/sync.svg"
          //       }
          //     },
          //     {
          //       name: "span.btn-text",
          //       text: "generate word(s)"
          //     }
          //   ]
          // }
        ]
      },
      allWordContentObject({})
    ]
  }
};

export const allWordContentObject = (options = {}) => ({
  name: ".cipher-question-list",
  attributes: {
    id: allWordDivId
  },
  childElement: generateQuestionList(options)
})

function generateQuestionList(option) {
  const { cipherText = [] } = option;
// console.log({cipherText})
  let counter = 0;
  return  cipherText.reduce(  (total, char, index) => [...total, ...charData["charConfig"][char]["questionsLength"].map( (question) => ({
    name: ".cipher-input-div",
    childElement: [
      {
        name: ".cipher-word-text",
        text: `Word ${counter + 1}`
      },
      {
        name: ".cipher-word-input",
        childElement: [...generateInputList(
          question, 
          hintInputClass,
          {
            attributeData: {
              maxlength: 1,
              size: 1
            },
            value: `${++counter}-`,
            dataList: [{
              key: "index", 
              valueFunc: ({_i}) => `${index}-${char}-${counter}`
            }, {
              key: "next-id",
              valueFunc: ({_i}) => _i !== (question-1) ? `word-input-${counter}-${_i + 2}` : `hint-${counter}-${question}`
            }]
          }
        )
      ]
      },
      {
        name: ".hint-details",
        childElement: [
          {
            name: `input.${hintInputOptClass}`,
            attributes: {
              id: `hint-${counter}-${question}`,
              placeholder: "hints (optional)",
              ['data-index']:  `${index}-${char}-${counter}`,
              ['data-next-id']: index !== (cipherText.length -1) ?  `word-input-${counter+1}-1` : "word-input-1-1"
            }
          },
          // {
          //   name: "button.random-word-btn",
          //   text: "",
          //   attributes: {
          //     id: `random-dt-${counter}`
          //   },
          //   childElement: [
          //     {
          //       name: "img.btn-icon",
          //       attributes: {
          //         src: "./assets/sync.svg"
          //       }
          //     }
          //   ]
          // }
        ]
      }
    ]
  }) )], [])
}