const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = ctx.canvas.width;
const canvasHeight = ctx.canvas.height;

// const canvasHeight = 16;
// const canvasWidth  = canvasHeight * 7 / 10 ;

const midX = Math.round( canvasWidth / 2 );
const midY = Math.round( canvasHeight / 2 );

const radius = 5;
const pointList = {};

const graphics = new Graphics(ctx, canvasWidth);

const totalLine1 = 3;
const unit = Math.round( midY / totalLine1 );

// line equation is: y = slope * x
pointList["first_triangle"] = {x1: 0, y1: 0};
pointList["second_triangle"] = {x1: 0, y1: 0};
graphics.circle(0, 0);

// now if we mirror, we will get opposite co-ordinates
graphics.circle(canvasWidth, 0);
pointList["third_triangle"] = {x1: canvasWidth, y1: 0};
pointList["forth_triangle"] = {x1: canvasWidth, y1: 0};

graphics.circle(midX, canvasHeight);
pointList["first_triangle"] = {...pointList["first_triangle"], x2: midX, y2: canvasHeight};
pointList["third_triangle"] = {...pointList["third_triangle"], x2: midX, y2: canvasHeight};

const constant = (2*unit);
const slope = get_slope({x1:0, y1:0}, {x2:midX, y2:canvasHeight});
// after adding constant, 
// line equation is: y = slope * x - constant

let y1 = 0;
let x1 = constant / slope;
graphics.circle(x1, y1);
pointList["second_triangle"] = {...pointList["second_triangle"], x2: x1, y2: y1};

// now if we mirror, we will get opposite co-ordinates
graphics.circle(canvasWidth - x1, y1);
pointList["forth_triangle"] = {...pointList["forth_triangle"], x2: canvasWidth - x1, y2: y1};

// we have another line equation with is parallel to x-axis
// so it will be: x = midX;
x1 = midX;
y1 = (slope * x1) - constant;
graphics.circle(x1, y1);
pointList["first_triangle"] = {...pointList["first_triangle"], x3: x1, y3: y1};
pointList["second_triangle"] = {...pointList["second_triangle"], x3: x1, y3: y1};

pointList["third_triangle"] = {...pointList["third_triangle"], x3: x1, y3: y1};
pointList["forth_triangle"] = {...pointList["forth_triangle"], x3: x1, y3: y1};

// from equation: y = slope * x - constant
// if we know y, then we can find value of x
const yy1 = 2.5 * unit;
const xx1 = (yy1 + constant) / slope;
graphics.circle(xx1, yy1);

pointList["fifth_triangle"] = {x1: xx1, y1: yy1};
pointList["sixth_triangle"] = {x1: xx1, y1: yy1};

// mirror co-ordinate
graphics.circle(canvasWidth - xx1, yy1);
pointList["sixth_triangle"] = {...pointList["sixth_triangle"], x2: canvasWidth - xx1, y2: yy1};

const yy2 = yy1 - unit/1.5;
const xx2 = (yy2 + constant) / slope;
graphics.circle(xx2, yy2);
pointList["fifth_triangle"] = {...pointList["fifth_triangle"], x2: xx2, y2: yy2};

// mirror co-ordinate
graphics.circle(canvasWidth - xx2, yy2);
pointList["fifth_triangle"] = {...pointList["fifth_triangle"], x3: canvasWidth - xx2, y3: yy2};
pointList["sixth_triangle"] = {...pointList["sixth_triangle"], x3: canvasWidth - xx2, y3: yy2};

for(let key in pointList) {
  const { x1, y1, x2, y2, x3, y3 } = pointList[key];
  console.log(key, {x1, y1, x2, y2, x3, y3})
  graphics.triangle( x1, y1, x2, y2, x3, y3 );
}