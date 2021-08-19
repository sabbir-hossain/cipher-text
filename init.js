import { generateBackground } from "./src/draw-char.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = ctx.canvas.width;
// const canvasHeight = ctx.canvas.height;

let backgroundFontSize = 35;

const input = {
  "0_D": [
    "FRANKFURT",
    "FAIZABAD"
  ],
  "1_H": [
    "HALIFAX",
    "JAKARTA",
    "IDEA"
  ],
  "2_A": [
    "DAMASCUS",
    "ATHENS",
    "HERS"
  ],
  "3_K": [
    "BANGKOK",
    "BAKU",
    "BERN"
  ],
  "4_A": [
    "NEWDELHI",
    "MADINA",
    "DUKE"
  ]
}

generateBackground(ctx, input, canvasWidth, backgroundFontSize);

//Variables
var canvasx = canvas.offsetLeft;
var canvasy = canvas.offsetTop;
var last_mousex = 0, last_mousey = 0;
var mousex = 0, mousey = 0;
var mousedown = false;


//Mousedown
canvas.addEventListener('mousedown', function(e) {
  last_mousex = parseInt(e.clientX-canvasx);
  last_mousey = parseInt(e.clientY-canvasy);
  mousedown = true;
});

//Mouseup
canvas.addEventListener('mouseup', function(e) {
  mousedown = false;
});

//Mousemove
canvas.addEventListener('mousemove', drawLine);

function drawLine(e) {
  mousex = parseInt(e.clientX-canvasx);
  mousey = parseInt(e.clientY-canvasy);

  if(mousedown) {
    ctx.globalCompositeOperation = "destination-over";
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(last_mousex,last_mousey);
    ctx.lineTo(mousex,mousey);

    ctx.strokeStyle = '#e09200';
    ctx.lineWidth = 30;
    ctx.lineJoin = ctx.lineCap = 'round';

    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
}