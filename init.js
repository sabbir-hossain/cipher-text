import { generateBackground, displayData } from "./src/draw-char.js";
import Graphics from "./lib/graphics.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = ctx.canvas.width;
const canvasHeight = ctx.canvas.height;

let backgroundFontSize = 178;

// generateBackground(ctx, "Hello", backgroundFontSize);

const text = "One Day, God KRISHNA was returning to his kingdom. All of the villagers enlighten their homes and roads so that their GOD's Ratha Yatra would looked wonderful But some villagers made their homes and roads completely into darkness. Then LORD KRISHNA asked them why did they do that? They said that dear GOD your Ratha Yatra is already in enlighten, so we found out that if we would be into darkness, your Ratha Yatra will looked much more wonderful.I wish I would be like those villagers.";


displayData(ctx, text, canvasWidth);

// canvas.addEventListener('pointerup', (evt) => {
//   console.log("evt", evt);
// }, false);

//Variables
var canvasx = canvas.offsetLeft;
var canvasy = canvas.offsetTop;
var last_mousex = 0, last_mousey = 0;
var mousex = 0, mousey = 0;
var mousedown = false;
var prev_mousex = 0, prev_mousey = 0;



//Mousedown
canvas.addEventListener('mousedown', function(e) {
  // prev_mousex = last_mousex;
  // prev_mousey = last_mousey;

  last_mousex = parseInt(e.clientX-canvasx);
  last_mousey = parseInt(e.clientY-canvasy);
  // clearDt()
  mousedown = true;
});

//Mouseup
canvas.addEventListener('mouseup', function(e) {
  mousedown = false;
  // canvas.removeEventListener('mousemove', drawLine)
});

//Mousemove
canvas.addEventListener('mousemove', drawLine);

function drawLine(e) {
  mousex = parseInt(e.clientX-canvasx);
  mousey = parseInt(e.clientY-canvasy);

  if(mousedown) {
    ctx.globalCompositeOperation = "destination-over";
      // ctx.clearRect(last_mousex,last_mousey,prev_mousex,prev_mousey); //clear canvas
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(last_mousex,last_mousey);
      ctx.lineTo(mousex,mousey);
      // console.log({last_mousex,last_mousey, mousex,mousey})
      ctx.strokeStyle = '#4d4d4d';
      // ctx.globalAlpha = 0.1;
      // ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.lineWidth = 25;
      ctx.lineJoin = ctx.lineCap = 'round';

      // ctx.globalAlpha = 0.2;
      // ctx.fillStyle = "blue";
      // ctx.fillRect(last_mousex, last_mousey, mousex,mousey);
      // ctx.closePath();
      ctx.stroke();
      ctx.restore();
  }
}
