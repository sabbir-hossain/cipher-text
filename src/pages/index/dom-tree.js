import { getPuzzles } from "../../services/get.js";
import {
  canvasId
} from "./common.js";

export const mainInputObject = async (options = {}) => {

  return allWordContentObject(options)
    .then( data => ({
      name: "main.main-contents",
      childElement: [
        {
          name: "canvas.cipher",
          attributes: {
            id: canvasId
          }
        },
        data
      ]
    }))
};


export const allWordContentObject = async (options = {}) => ({
  name: ".cipher-question-list",
  childElement: await generateWordList(options)
})

async function generateWordList(option) {

  return getPuzzlesData()
    .then( (result) => Promise.all(
        Object.values(result.wordData).map( ({ hint, text}) => (
          {
            name:".cipher-hints",
            childElement: [
              {
                name: "span.word",
                text: text.join("").toUpperCase()
              },
              {
                name: "span.word-hints",
                text: hint
              }
            ]
          }
        ) )
      )
    )
}

async function getPuzzlesData() {
  return getPuzzles();
}