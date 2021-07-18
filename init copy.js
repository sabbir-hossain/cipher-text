const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = ctx.canvas.width;
const canvasHeight = ctx.canvas.height;

const midX = Math.round( canvasWidth / 2 );
const midY = Math.round( canvasHeight / 2 );

const radius = 5;
const pointList = [];

const graphics = new Graphics(ctx);

// draw 3 horizontal line from top
const totalLine1 = 3;
const unitDiff = Math.round( midY / totalLine1 );
// // for(const yy1 of Array.from({length: totalLine1+1}).map((_, i) => (i+1) * unitDiff)) {
// for(let i=0; i<=totalLine1+1; i++) {
//   const yy1 = (i+1) * unitDiff;
//   graphics.line(0, yy1, canvasWidth, yy1);
// }

// first line
// graphics.circle(0, 0, radius);
graphics.line(0, 0, midX, canvasHeight);
push_point(0, 0);
push_point(midX, canvasHeight);
// graphics.circle(midX, canvasHeight, radius);

// second line
const slope = get_slope({x1:0, y1:0}, {x2:midX, y2:canvasHeight});
// const slope = (canvasHeight/midX);
const constValue = - (unitDiff * 2);
const x1 = (- midX * ( constValue / canvasHeight));
const y1 = 0;
push_point(x1, y1);
const x2 = midX;
const y2 = (slope * x2) + constValue;
push_point(x2, y2);
graphics.line(x1, y1, x2, y2);
graphics.circle(x2, y2, radius);
// graphics.circle(x1, y1, radius);

const { a: a1, b: b1, c: c1 } = get_const_value(
  {x1:0, y1:constValue*-1},
  {x2: midX, y2:constValue*-1}
  );

const { a: a2, b: b2, c: c2 } = get_const_value(
  {x1, y1},
  {x2, y2}
);

console.log(
  {x1, y1},
  {x2, y2}
)

// graphics.circle(x1, y1, radius);
// console.log( {x1:canvasWidth - x1, y1},
//   {x2, y2})
// console.log({ a1, b1, c1, a2, b2, c2})

// const {a, b} = intersection_two_line(
//   {a1, b1, c1},
//   {a2, b2, c2}
//   );
//   graphics.circle(a, b, radius);

// //
// graphics.circle(canvasWidth, 0, radius);
graphics.line(canvasWidth, 0, midX, canvasHeight)
push_point(canvasWidth, 0);
push_point( midX, canvasHeight);
// graphics.circle(midX, canvasHeight, radius);

graphics.line(canvasWidth - x1, y1, x2, y2);
push_point(canvasWidth - x1, y1);
push_point(x2, y2);
// graphics.circle(canvasWidth - x1, y1, radius);


// const yy1 = 2 * unitDiff;
// graphics.line(0, yy1, canvasWidth, yy1);

// const yy2 = yy1 - unitDiff/1.5;
// graphics.line(0, yy2, canvasWidth, yy2);
// console.log({x1, y1, x2, y2, yy1, yy2, constValue});


// const {  }

// graphics.circle(58, 166, radius);

function push_point(x, y) {
  pointList.push({ x, y});
}