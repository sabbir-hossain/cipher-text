function draw_y(size = 16) {
  const pointList = {};
  const max_y = size;
  const max_x = max_y * 5 / 10;

  const totalLineY = 7;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 4;
  const x_unit = Math.round( max_x / totalLineX );

  const constX = ( x_unit * 0.50 );
  const constY = ( y_unit * 0.50 );
  // const graphics = new Graphics(ctx, size, 0, 0);

  // graphics.line((x_unit * (totalLineX/2)), (y_unit * (totalLineY/2)), (x_unit * (totalLineX/2)), (y_unit * (totalLineY/2 + 1)))

  // graphics.line((x_unit * (totalLineX/4)), 0, (x_unit * (totalLineX/4)), y_unit)

  // graphics.line(max_x - (x_unit * (totalLineX/4)), 0, max_x - (x_unit * (totalLineX/4)), y_unit)


  pointList["one"] = { 
    x1: 0, y1: y_unit * (totalLineY),
    x2: 0, y2: y_unit * (totalLineY -1) ,
    x3: (x_unit * (totalLineX/2)) , y3: (y_unit * (totalLineY/2))
  };

  pointList["two"] = { 
    x1: 0, y1: y_unit * (totalLineY),
    x2: (x_unit * (totalLineX/2)), y2: (y_unit * (totalLineY/2 +1)),
    x3: (x_unit * (totalLineX/2)) , y3: (y_unit * (totalLineY/2))
  };

  pointList["three"] = { 
    x1: (x_unit * (totalLineX)), y1: (y_unit * (totalLineY)),
    x2: (x_unit * (totalLineX)), y2: (y_unit * (totalLineY-1)),
    x3: (x_unit * (totalLineX/2)) , y3: (y_unit * (totalLineY/2))
  };

  pointList["four"] = { 
    x1: (x_unit * (totalLineX)), y1: (y_unit * (totalLineY)),
    x2: (x_unit * (totalLineX/2)), y2: (y_unit * (totalLineY/2+1)),
    x3: (x_unit * (totalLineX/2)), y3: (y_unit * (totalLineY/2))
  };

  pointList["five"] = { 
    x1: (x_unit * (totalLineX/2)) - constX, y1: (y_unit * (totalLineY/2 + 1)),
    x2: (x_unit * (totalLineX/2)) - constX, y2: 0,
    x3: (x_unit * (totalLineX/2)) + constX, y3: 0
  };

  pointList["six"] = { 
    x1: (x_unit * (totalLineX/2)) - constX, y1: (y_unit * (totalLineY/2 + 1)),
    x2: (x_unit * (totalLineX/2)) + constX, y2: (y_unit * (totalLineY/2 + 1)),
    x3: (x_unit * (totalLineX/2)) + constX, y3: 0
  };

  // pointList["seven"] = { 
  //   x1: (x_unit * totalLineX), y1: (y_unit * (totalLineY)),
  //   x2: max_x - (x_unit * (totalLineX/4)), y2: 0,
  //   x3: max_x - (x_unit * (totalLineX/4)), y3: y_unit + constY
  // };

  // pointList["eight"] = { 
  //   x1: (x_unit * totalLineX), y1: (y_unit * (totalLineY)),
  //   x2: (x_unit * totalLineX), y2: (y_unit * (totalLineY - 1)) - constY,
  //   x3: max_x - (x_unit * (totalLineX/4)), y3: 0
  // };


  return pointList;
}