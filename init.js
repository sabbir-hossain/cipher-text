import { generateBackground } from "./src/draw-char.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = ctx.canvas.width;

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

const hintTextList = [
  {"text": "FRANKFURT", "info": "One of the largest city of Germany"},
  {"text": "FAIZABAD", "info": "city of Pakistan/India"},
  {"text": "HALIFAX", "info": "city of Canada"},
  {"text": "JAKARTA", "info": "Capital Of Indonesia"},

  {"text": "DAMASCUS", "info": "Capital Of Syria. The oldest city in the world"},
  {"text": "MADINA", "info": "Madina is the second holiest city in Islam"},

  {"text": "BANGKOK", "info": "Capital Of Thailand and is called 'Venice of the East'."},
  {"text": "BAKU", "info": "Capital Of Azerbaijan and is called 'City of Winds'"},
  {"text": "BERN", "info": "The de facto capital of Switzerland"},
  {"text": "NEW DELHI", "info": "Capital Of India. It is the world’s second most bird-rich city in the world"},

  {"text": "ATHENS", "info": "Capital and largest city of Greece and named in the honor of Greek goddess 'Athena'"},
  { "text": "DUKE", "info": ""},
  {"text": "HERS", "info": ""},
  {"text": "IDEA", "info": ""},
];

const hintMainDiv = document.getElementById("cipher-hints-list");

for(const hintText of hintTextList) {
  const hintDiv = document.createElement("div");
  hintDiv.classList.add("cipher-hints");

  const hintSpan = document.createElement("span");
  hintSpan.classList.add("text-dt");
  const textNode = document.createTextNode(hintText.text);
  hintSpan.appendChild(textNode);

  const hintInfoSpan = document.createElement("span");
  hintInfoSpan.classList.add("text-dt-info");
  const textNode02 = document.createTextNode(hintText.info);
  hintInfoSpan.appendChild(textNode02);

  hintDiv.appendChild(hintSpan);
  hintDiv.appendChild(hintInfoSpan);

  hintMainDiv.appendChild(hintDiv);
}