import { getPuzzles } from "../../services/get.js";

export const mainInputObject = async (options = {}) => {

  return allWordContentObject(options)
    .then( data => ({
      name: "main.main-contents",
      childElement: [
        {
          name: "canvas.cipher",
          attributes: {
            id: "cipher-canvas"
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

  return getPuzzles()
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