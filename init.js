const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const canvasWidth = ctx.canvas.width;
const canvasHeight = ctx.canvas.height;

const midX = Math.round( canvasWidth / 2 );
const midY = Math.round( canvasHeight / 2 );

const radius = 5;

// const size = 16;
// const size = 18;
// const size = 40;
const size = canvasHeight;

// draw_char( draw_u(size), size, 0, 0 );
// draw_char( draw_o(size), size, 0, 0 );
// draw_char( draw_g(size), size, 0, 0 );
// draw_char( draw_d(size), size, 0, 0 );
// draw_char( draw_c(size), size, 0, 0 );
draw_char( draw_b(size), size, 0, 0 );
// draw_char( draw_a(size), size, size-6, 0 );


function draw_char(pointList, size, start, end) {
  const graphics = new Graphics(ctx, size, start, end);

  const colors = ["#042001", "#e09200", "#11670b", "#008080",  "#000024"];
  let i=0;
  for(let key in pointList) {
    const { x1, y1, x2, y2, x3, y3 } = pointList[key];
    console.log(key, {x1, y1, x2, y2, x3, y3})
    graphics.triangle( x1, y1, x2, y2, x3, y3, "blue" );
    // graphics.triangle( x1, y1, x2, y2, x3, y3, colors[ Math.round( Math.random() *  colors.length - 1) ] );
  }
}