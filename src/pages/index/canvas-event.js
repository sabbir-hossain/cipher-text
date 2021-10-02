


export default function canvasEvent(canvas, ctx) {

  //Variables
  let isDrawing = null;
  let points = [ ];
  const lineWidth = 30;
  let color = '#e09200';
  const colorList = [
    "#FF5733", '#e09200', "#fccb03", 
    "#AF7AC5", "#3e99d4", "#5D6D7E",
    "#32af97", "#2ca38c",
  ];

  //Mousedown
  canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;

    points.push({ 
      x: e.offsetX !== e.clientX ? e.offsetX : e.clientX, 
      y: e.offsetY !== e.clientY ? e.offsetY : e.clientY, 
      width: lineWidth
    });
  });

  //Mouseup
  canvas.addEventListener('mouseup', function(e) {
    // mousedown = false;
    isDrawing = false;
    points.length = 0;
    color = colorList[ Math.floor(Math.random() * (colorList.length-1)) ]
    // color = colorList[ Math.floor(Math.random() * (colorList.length-1)) ]
  });

  //Mousemove
  canvas.addEventListener('mousemove', function(e) {
    if (!isDrawing) return;

    ctx.globalCompositeOperation = "destination-over";
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    points.push({ 
      x: e.offsetX !== e.clientX ? e.offsetX : e.clientX, 
      y: e.offsetY !== e.clientY ? e.offsetY : e.clientY, 
      width: lineWidth
    });

    ctx.strokeStyle = color;
    ctx.lineJoin = ctx.lineCap = 'round';

    for (var i = 1; i < points.length; i++) {
      ctx.beginPath();
      ctx.moveTo(points[i-1].x, points[i-1].y);
      ctx.lineWidth = points[i].width;
      ctx.lineTo(points[i].x, points[i].y);
      ctx.stroke();
    }
  })

}