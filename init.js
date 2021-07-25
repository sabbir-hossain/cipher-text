const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = ctx.canvas.width;
const canvasHeight = ctx.canvas.height;

const config = Config();

// const midX = Math.round( canvasWidth / 2 );
// const midY = Math.round( canvasHeight / 2 );

// const radius = 5;

// const size = 16;
// const size = 18;
// const size = 40;
const size = canvasHeight;
// const newSize = size;
const newSize = (size * config['A'].ratio / 10) + 4;
      // positionX += size;

// draw_char( draw_b(size), size, 0, 0 );

const text = "One Day, God KRISHNA was returning to his kingdom. All of the villagers enlighten their homes and roads so that their GOD's Ratha Yatra would looked wonderful But some villagers made their homes and roads completely into darkness. Then LORD KRISHNA asked them why did they do that? They said that dear GOD your Ratha Yatra is already in enlighten, so we found out that if we would be into darkness, your Ratha Yatra will looked much more wonderful.I wish I would be like those villagers."

// const text = "One Day, God KRISHNA was returning to his kingdom";

let fontColor = "#000";
let backgroundColor = "#fff";
let fontSize = 19;

let backgroundFontSize = 178;

function handleFontColor(evt) {
  fontColor = evt.value;
  displayData(text);
}

function handleBackgroundColor(evt) {
  backgroundColor = evt.value;
  displayData(text);
}

function handleFontSize(evt) {
  fontSize = evt.value;
  displayData(text);
}

const allowedChatList = [ 
  "A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X",
  "Y", "Z"
]

// console.log(window)
// console.log({fontColor, backgroundColor})

function displayData( charList) {
  let positionX = 0;
  let positionY = 25;
  
  const upperCharList = charList.toUpperCase();
  const len = upperCharList.length;
  const maxChar = Math.floor( canvasWidth / fontSize );
  for (let i=0; i<len; i++ ) {
    const charVal = upperCharList[i];

    if( positionX > (canvasWidth-maxChar)) {
      positionX = 10;
      positionY += (fontSize * 2)
    } 

    if(charVal === " ") {
      const pointList = SPACE(fontSize);
      positionX += fontSize;
      const height = fontSize;
      const width = fontSize;

      draw_char(pointList, backgroundColor, backgroundColor, positionX, positionY, height, width);
    } else if( allowedChatList.includes(charVal) ) {
      // console.log({charVal})
      const pointList = window[charVal](fontSize);
      const size = (fontSize * config[charVal].ratio / 10) + 4;
      positionX += size;
      const height = fontSize;
      const width = size;
      // draw_char(pointList, color, bgColor, startX, startY,  height, width)
      draw_char(pointList, fontColor, backgroundColor, positionX, positionY, height, width);
    }

    // console.log({positionX, positionY})
  }
}

// displayData(text);

function generateBackgroud(charList) {
  let positionX = 0;
  let positionY = 200;
  
  const upperCharList = charList.toUpperCase();
  const len = upperCharList.length;
  const maxChar = Math.floor( canvasWidth / backgroundFontSize );

  for (let i=0; i<len; i++ ) {
    const charVal = upperCharList[i];

    if( allowedChatList.includes(charVal) ) {
      // console.log({charVal})
      const pointList = window[charVal](backgroundFontSize);
      const size = (backgroundFontSize * config[charVal].ratio / 10) + 4;
      positionX += size;
      const height = backgroundFontSize;
      const width = size;
      // draw_char(pointList, color, bgColor, startX, startY,  height, width)
      draw_char(pointList, fontColor, backgroundColor, positionX, positionY, height, width);
    }

    // console.log({positionX, positionY})
  }
}

generateBackgroud("hello");

function draw_char(pointList, color, bgColor, startX, startY,  height, width) {
  const graphics = new Graphics(ctx, color, bgColor, startX, startY,  height, width);

  // const colors = ["#042001", "#e09200", "#11670b", "#008080",  "#000024"];
  // let i=0;
  for(let key in pointList) {
    const { x1, y1, x2, y2, x3, y3 } = pointList[key];
    // console.log(key, {x1, y1, x2, y2, x3, y3})
    graphics.triangle( x1, y1, x2, y2, x3, y3, color);
    // graphics.triangle( x1, y1, x2, y2, x3, y3, colors[ Math.round( Math.random() *  colors.length - 1) ] );
  }
}