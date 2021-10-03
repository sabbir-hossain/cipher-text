import data from "../../data/index.js";
import Graphics from "../../lib/canvas/graphics.js";

const randomValue = function(data) {
  return data[Math.round( Math.random() * ( data.length - 1) )]
}

const colorList = [
  "#FF5733", '#e09200', "#F7DC6F", 
  "#AF7AC5", "#7FB3D5", "#5D6D7E",
  "#76D7C4", "#73C6B6",
];

export let canvasTextFontSize = 35;
export const defaultFontSize = 35;

export function drawCanvas(ctx, inputList, fontSize=35, fontColor="red", positionX=25, positionY=25 ) {
  const maxWidth = ctx.canvas.width;
  let max_x = positionX;

  let init_x = max_x;

  const initWidth = 1216;
  // scale font-size
  fontSize = Math.floor( ( fontSize * maxWidth) / initWidth)
  canvasTextFontSize = fontSize;
  let init_y = fontSize;

  for (const input in inputList) {
    const charVal = input.split("_")[1];
    const dtx = data.charConfig[charVal]?.["co-ordinates"];
    const len_x = dtx.length;
    const len_y = dtx?.[0].length;

    positionX = max_x;
    positionY = init_y;
    init_x = max_x;

    // const selectedColor =randomValue(colorList);

    if( (positionX + (len_y * fontSize)) > maxWidth ) {
      positionX = fontSize;
      max_x = positionX;
      init_x = max_x;
      
      positionY += ((len_x + 1) * fontSize);
      init_y = positionY;
    }

    if( (positionX + (len_y * fontSize)) > maxWidth ) {
      positionX = fontSize;
      max_x = positionX;
      init_x = max_x;
      
      positionY += ((len_x + 1) * fontSize);
      init_y = positionY;
    }

    for(let a = 0; a < len_x; a++) {
      for(let b = 0; b < len_y; b++) {
        if( dtx[a][b] === 0 ) {
          fontColor = "#fff";
        } else {
          fontColor = "red";
        }


        if( dtx[a][b] !== 0 ) {
          const val = dtx[a][b].split("|");

          const firstPart = val[0];
          const secondPart = val[1];
          process_char(ctx, inputList[input][firstPart][secondPart], "#000", fontSize - 10, positionX + 7, positionY + fontSize-5)
        } else {
          process_char(ctx, randomValue(data.allowedChatList), "#000", fontSize - 10, positionX + 7, positionY + fontSize-5)
        }

        positionX += (fontSize + 1);
        max_x = positionX + fontSize;
      }

      process_char(ctx, randomValue(data.allowedChatList), "#000", fontSize - 10, positionX + 7, positionY + fontSize-5)

      positionY += (fontSize + 1);
      positionX =  init_x;
    }
  
  }

}

function process_char(ctx, charVal, fontColor, fontSize, positionX, positionY) {
  const graphics = new Graphics(ctx, fontColor, positionX, positionY);
  const pointList = data[charVal](fontSize);
  draw_char(graphics, pointList);
}

function draw_char(graphics, pointList) {
  for(let key in pointList) {
    const { x1, y1, x2, y2, x3, y3 } = pointList[key];
    graphics.triangle( x1, y1, x2, y2, x3, y3);
  }
}