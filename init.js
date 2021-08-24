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
    "MEDINA",
    "DUKE"
  ]
}

generateBackground(ctx, input, canvasWidth, backgroundFontSize);

//Variables
var isDrawing, points = [ ];
var lineWidth = 30;

//Mousedown
canvas.addEventListener('mousedown', function(e) {
  isDrawing = true;
  points.push({ 
    x: e.offsetX !== e.clientX ? e.offsetX : e.clientX, 
    y: e.clientY,
    width: lineWidth
  });
});

//Mouseup
canvas.addEventListener('mouseup', function(e) {
  // mousedown = false;
  isDrawing = false;
  points.length = 0;
});

//Mousemove
canvas.addEventListener('mousemove', function(e) {
  if (!isDrawing) return;

  ctx.globalCompositeOperation = "destination-over";
  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
  points.push({ 
    x: e.offsetX !== e.clientX ? e.offsetX : e.clientX, 
    y: e.clientY,
    width: lineWidth
  });

  ctx.strokeStyle = '#e09200';
  ctx.lineJoin = ctx.lineCap = 'round';

  for (var i = 1; i < points.length; i++) {
    ctx.beginPath();
    ctx.moveTo(points[i-1].x, points[i-1].y);
    ctx.lineWidth = points[i].width;
    ctx.lineTo(points[i].x, points[i].y);
    ctx.stroke();
  }
})
// canvas.addEventListener('mousemove', drawLine);

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
  {"text": "FRANKFURT", "info": "One of the largest city in Germany and home to the European Central Bank"},
  {"text": "FAIZABAD", "info": "city in Pakistan/India"},
  {"text": "HALIFAX", "info": "city in Canada"},
  {"text": "JAKARTA", "info": "Capital Of Indonesia"},

  {"text": "DAMASCUS", "info": "Capital Of Syria. The oldest city in the world"},
  {"text": "MEDINA", "info": "Medina is the second holiest city in Islam"},

  {"text": "BANGKOK", "info": "Capital Of Thailand and is called 'Venice of the East'."},
  {"text": "BAKU", "info": "Capital Of Azerbaijan and is called 'City of Winds'"},
  {"text": "BERN", "info": "The de facto capital of Switzerland"},
  {"text": "NEW DELHI", "info": "Capital Of India. It is the world’s second most bird-rich city in the world"},

  {"text": "ATHENS", "info": "Capital and largest city of Greece and named in the honor of Greek goddess 'Athena'"},
  { "text": "DUKE", "info": ""},
  {"text": "HERS", "info": ""},
  {"text": "IDEA", "info": ""},
  {"text": "DHAKA", "info": "Capital Of Bangladesh"},
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