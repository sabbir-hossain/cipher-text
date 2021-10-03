import Graphics from "../lib/graphics.js";
import {config, allowedChatList} from "../helper/share.js"
import data from "../data/index.js";

Array.prototype.random = function() {
  return this[Math.round( Math.random() * ( this.length - 1) )]
}

export function generateBackground(ctx, inputList, maxWidth, fontSize, fontColor="red", positionX=25, positionY=25) {
  // const graphics = new Graphics(ctx);
  // const upperCharList = charList.toUpperCase();
  // const len = upperCharList.length;
  // const maxChar = Math.floor( canvasWidth / fontSize );

  positionX = positionX;
  positionY = positionY;

  let max_x = positionX;
  let init_x = max_x;

  let init_y = fontSize;
  
  for (const input in inputList) {
    const charVal = input.split("_")[1];
    const dtx = config[charVal]?.["co-ordinates"];
    const len_x = dtx.length;
    const len_y = dtx?.[0].length;

    positionX = max_x;
    positionY = init_y;
    init_x = max_x;

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

        // graphics.rect(positionX, positionY, fontSize, fontSize, fontColor);

        if( dtx[a][b] !== 0 ) {
          const val = dtx[a][b].split("|");
          const firstPart = val[0].split(",");
          const secondPart = val[1].split(",");
          process_char(ctx, inputList[input][firstPart[0]][secondPart[0]], "#000", fontSize - 10, positionX + 7, positionY + fontSize-5)
        } else {
          process_char(ctx, allowedChatList.random(), "#000", fontSize - 10, positionX + 7, positionY + fontSize-5)
        }

        positionX += (fontSize + 1);
        max_x = positionX + fontSize;
      }

      process_char(ctx, allowedChatList.random(), "#000", fontSize - 10, positionX + 7, positionY + fontSize-5)

      positionY += (fontSize + 1);
      positionX =  init_x;
    }
  }
}

export function displayData(ctx, charList, maxWidth, fontSize=25, fontColor="black", positionX=0, positionY=25) {

  const upperCharList = charList.toUpperCase();
  const len = upperCharList.length;
  const maxChar = Math.floor( maxWidth / fontSize );
  for (let i=0; i<len; i++ ) {
    const charVal = upperCharList[i];
    console.log({charVal, })
    // if(charVal === " ") {
    //   // const graphics = new Graphics(ctx, "#fff", positionX, positionY);
    //   // const pointList = data['SPACE'](fontSize);
    //   // draw_char(graphics, pointList);

    //   positionX += fontSize;
    // } else 
    if( allowedChatList.includes(charVal) ) {
      process_char(ctx, charVal, fontColor, fontSize, positionX, positionY)
      const size = (fontSize * config[charVal].ratio / 10) + 10;
      positionX += size;
    }

    if( positionX > (maxWidth-maxChar)) {
      positionX = 10;
      positionY += (fontSize * 2)
    } 
  }
}

function process_char(ctx, charVal, fontColor, fontSize, positionX, positionY) {
  const graphics = new Graphics(ctx, fontColor, positionX, positionY);
  console.log({charVal, fontSize, data})
  const pointList = data[charVal](fontSize);
  draw_char(graphics, pointList);
}

function draw_char(graphics, pointList) {
  for(let key in pointList) {
    const { x1, y1, x2, y2, x3, y3 } = pointList[key];
    graphics.triangle( x1, y1, x2, y2, x3, y3);
  }
}