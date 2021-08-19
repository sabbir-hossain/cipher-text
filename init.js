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

