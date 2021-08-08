import {config} from "./helper/share.js"
import data from "./data/index.js";
import Graphics from "./lib/graphics.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = ctx.canvas.width;
const canvasHeight = ctx.canvas.height;

const allowedChatList = [ 
  "A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X",
  "Y", "Z"
]
let fontColor = "#000";
let backgroundColor = "#fff";
let backgroundFontSize = 178;

const size = canvasHeight;
// const newSize = size;
// const newSize = (size * config['A'].ratio / 10) + 4;

const colors = ["#042001", "#e09200", "#11670b", "#008080",  "#000024"];

function generateBackground(charList) {
  let positionX = 50;
  let positionY = 200;

  const fontColor = "red"
  // let backgroundColor2 = "blue"
  
  const upperCharList = charList.toUpperCase();
  const len = upperCharList.length;
  const maxChar = Math.floor( canvasWidth / backgroundFontSize );

  for (let i=0; i<len; i++ ) {
    const charVal = upperCharList[i];

    if( allowedChatList.includes(charVal) ) {
      // console.log({charVal})
      const pointList = data[charVal](backgroundFontSize);
      const size = (backgroundFontSize * config[charVal].ratio / 10) + 4;
      
      const height = backgroundFontSize;
      const width = size;
      console.log({charVal, positionX, positionY, height, width, ratio: config[charVal].ratio})
      const graphics = new Graphics(ctx, fontColor, positionX, positionY);
      draw_char(graphics, pointList);

      graphics.rect(positionX, 15, width, height+10, colors[i]);

      positionX += size;
    }

    // console.log({positionX, positionY})
  }
}

generateBackground("xyz");

// function draw_char(pointList, color, bgColor, startX, startY,  height, width) {
  // const graphics = new Graphics(ctx, color, bgColor, startX, startY,  height, width);
function draw_char(graphics, pointList) {
  
  for(let key in pointList) {
    const { x1, y1, x2, y2, x3, y3 } = pointList[key];
    graphics.triangle( x1, y1, x2, y2, x3, y3);
  }

  // graphics.rect(startX, startY,  height, width)
}