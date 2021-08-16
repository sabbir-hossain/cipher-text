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

    ctx.strokeStyle = '#4d4d4d';
    ctx.lineWidth = 25;
    ctx.lineJoin = ctx.lineCap = 'round';

    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
}
