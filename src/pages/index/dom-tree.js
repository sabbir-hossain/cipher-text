import { getPuzzles } from "../../services/get.js";
import {
  canvasId,
  mainContentClass
} from "./common.js";

export const mainInputObject = async (options = {}) => {
  const innerWidth = Math.round( window.innerWidth * 0.89 );

  return getPuzzles(options?._id)
    .then(result => {
      return {
        wordList: generateWordList(result),
        domObject: allWordContentObject(result, innerWidth)
      }
    })
    .catch(error => {
      throw new Error(error);
    })
};


export const allWordContentObject = (result, innerWidth) => ({
  name: `main.${mainContentClass}`,
  childElement: [
    {
      name: "canvas.cipher",
      attributes: {
        id: canvasId,
        width: innerWidth,
        height: 400
      }
    },
    generatePuzzlesHints(result)
  ]
})

function generateWordList( result ) {
  return result.wordData ? Object.keys(result.wordData).sort().reduce( (total, key) => {
    const dt = key.split("-");
    const newKey = dt.slice(0,2).join("_");
    total[newKey] = total[newKey] || [];
    total[newKey].push( result.wordData[key]["text"].join("") );
    return total;
  }, {} ) : [];
}

function generatePuzzlesHints(result) {
  return  {
    name: ".cipher-question-list",
    childElement: result.wordData ? Object.values(result.wordData).map( ({ hint, text}) => (
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
    ) ) : []
  }
}
