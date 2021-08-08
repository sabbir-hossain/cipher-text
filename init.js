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

function generateBackgroud(charList) {
  let positionX = 0;
  let positionY = 200;

  let fontColor2 = "red"
  let backgroundColor2 = "blue"
  
  const upperCharList = charList.toUpperCase();
  const len = upperCharList.length;
  const maxChar = Math.floor( canvasWidth / backgroundFontSize );

  for (let i=0; i<len; i++ ) {
    const charVal = upperCharList[i];

    if( allowedChatList.includes(charVal) ) {
      // console.log({charVal})
      const pointList = data[charVal](backgroundFontSize);
      const size = (backgroundFontSize * config[charVal].ratio / 10) + 4;
      positionX += size;
      const height = backgroundFontSize;
      const width = size;
      // draw_char(pointList, color, bgColor, startX, startY,  height, width)
      draw_char(pointList, fontColor2, backgroundColor2, positionX, positionY, height, width);
    }

    // console.log({positionX, positionY})
  }
}

generateBackgroud("hello");

function draw_char(pointList, color, bgColor, startX, startY,  height, width) {
  const graphics = new Graphics(ctx, color, bgColor, startX, startY,  height, width);
  for(let key in pointList) {
    const { x1, y1, x2, y2, x3, y3 } = pointList[key];
    graphics.triangle( x1, y1, x2, y2, x3, y3, color);
  }
}