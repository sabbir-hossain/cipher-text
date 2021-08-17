import { generateBackground, displayData } from "./src/draw-char.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = ctx.canvas.width;
const canvasHeight = ctx.canvas.height;

let backgroundFontSize = 35;

generateBackground(ctx, "hello", canvasWidth, backgroundFontSize);

const text = "One Day, God KRISHNA was returning to his kingdom. All of the villagers enlighten their homes and roads so that their GOD's Ratha Yatra would looked wonderful But some villagers made their homes and roads completely into darkness. Then LORD KRISHNA asked them why did they do that? They said that dear GOD your Ratha Yatra is already in enlighten, so we found out that if we would be into darkness, your Ratha Yatra will looked much more wonderful.I wish I would be like those villagers.";

// displayData(ctx, text, canvasWidth);
