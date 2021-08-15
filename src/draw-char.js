import Graphics from "../lib/graphics.js";
import {config, allowedChatList} from "../helper/share.js"
import data from "../data/index.js";

export function generateBackground(ctx, charList, fontSize, fontColor="red", positionX=50, positionY=200) {
 
  const upperCharList = charList.toUpperCase();
  const len = upperCharList.length;
  // const maxChar = Math.floor( canvasWidth / fontSize );

  for (let i=0; i<len; i++ ) {
    const charVal = upperCharList[i];

    if( allowedChatList.includes(charVal) ) {
      const pointList = data[charVal](fontSize);
      const size = (fontSize * config[charVal].ratio / 10) + 10;

      const graphics = new Graphics(ctx, positionX, positionY, fontColor);
      draw_char(graphics, pointList);

      // graphics.rect(positionX, 15, width, height+10, colors[i]);

      positionX += size;
    }
  }
}

export function displayData(ctx, charList, maxWidth, fontSize=19, fontColor="black", positionX=0, positionY=25) {

  const upperCharList = charList.toUpperCase();
  const len = upperCharList.length;
  const maxChar = Math.floor( maxWidth / fontSize );
  for (let i=0; i<len; i++ ) {
    const charVal = upperCharList[i];

    if(charVal === " ") {
      // const graphics = new Graphics(ctx, positionX, positionY, "#fff");
      // const pointList = data['SPACE'](fontSize);
      // draw_char(graphics, pointList);

      positionX += fontSize;
    } else if( allowedChatList.includes(charVal) ) {
      const graphics = new Graphics(ctx, positionX, positionY, fontColor);
      const pointList = data[charVal](fontSize);
      draw_char(graphics, pointList);

      const size = (fontSize * config[charVal].ratio / 10) + 2;
      positionX += size;
    }

    if( positionX > (maxWidth-maxChar)) {
      positionX = 10;
      positionY += (fontSize * 2)
    } 
  }
}

function draw_char(graphics, pointList) {
  for(let key in pointList) {
    const { x1, y1, x2, y2, x3, y3 } = pointList[key];
    graphics.triangle( x1, y1, x2, y2, x3, y3);
  }
}