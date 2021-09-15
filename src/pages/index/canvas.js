import {
  canvasId
} from "./common.js";

export const canvas = document.getElementById(canvasId);
export const ctx = canvas.getContext("2d");

export const canvasWidth = ctx.canvas.width;