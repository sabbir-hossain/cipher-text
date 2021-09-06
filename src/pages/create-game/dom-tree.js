import { 
  cipherMainInputSaveId, 
  cipherInputClass, 
  hintInputClass, 
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
            text: "Enter cipher text (5-6 characters) : ",
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
                dataList: [{key: "index", value: ""}]
              }
            )
          },
          {
            name: "button.cipher-main-input-btn",
            text: "save",
            attributes: {
              id: cipherMainInputSaveId
            }
          }
        ]
      }, {
        name: ".cipher-question-list",
        text: "all question goes here",
        childElement: generateQuestionList(options)
      }
    ]
  }
};

function generateQuestionList(option) {
  console.log(" generateQuestionList : ", { option });
  const { cipherText } = option;

  const hintsList = cipherText.reduce(  (total, char, index) => [...total, ...charData["charConfig"][char]["questionsLength"].map( (question) => generateInputList(
    question, 
    hintInputClass,
    {
      attributeData: {
        maxlength: 1,
        size: 1
      },
      dataList: [{key: "index", value: `${char}-${index}`}]
    }
  ) )], [])

  console.log({hintsList})

  return [];
}