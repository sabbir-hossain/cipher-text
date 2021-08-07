import {config} from "./helper/share.js"
import data from "./data/index.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = ctx.canvas.width;
const canvasHeight = ctx.canvas.height;

const size = canvasHeight;
// const newSize = size;
const newSize = (size * config['A'].ratio / 10) + 4;

const pointList = data[`A`](size);
console.log({pointList})
// draw_char( draw_b(size), size, 0, 0 );

// draw_char(pointList, fontColor, backgroundColor, positionX, positionY, height, width);