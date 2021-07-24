function draw_p(size = 16) {
  const pointList = {};
  const max_y = size;
  const max_x = max_y * 4 / 10;

  const totalLineY = 8;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 4;
  const x_unit = Math.round( max_x / totalLineX );

  const constX = ( x_unit * 0.50 );
  const constY = ( y_unit * 0.50 );
  // const graphics = new Graphics(ctx, size, 0, 0);

  pointList["one"] = { 
    x1: 0, y1: 0,
    x2: x_unit, y2: 0,
    x3: 0, y3: y_unit * totalLineY,
  };

  pointList["two"] = { 
    x1: x_unit, y1: 0,
    x2: x_unit, y2: y_unit * totalLineY,
    x3: 0, y3: y_unit * totalLineY,
  };

  pointList["three"] = { 
    x1: x_unit, y1: y_unit * totalLineY,
    x2: x_unit, y2: y_unit * (totalLineY - 1),
    x3: x_unit * (totalLineX-1), y3: (y_unit * totalLineY)
  };

  pointList["four"] = { 
    x1: x_unit* (totalLineX-1), y1: y_unit * (totalLineY-1),
    x2: x_unit, y2: y_unit * (totalLineY - 1),
    x3: x_unit * (totalLineX-1), y3: (y_unit * totalLineY)
  };

  pointList["five"] = { 
    x1: x_unit * (totalLineX-1), y1: y_unit * totalLineY,
    x2: x_unit * (totalLineX-1), y2: y_unit * (totalLineY /2),
    x3: x_unit * totalLineX, y3: y_unit * (totalLineY -1)
  };

  pointList["six"] = { 
    x1: x_unit * totalLineX, y1: y_unit * (totalLineY-1),
    x2: x_unit * (totalLineX-1), y2: y_unit * (totalLineY /2),
    x3: x_unit * totalLineX, y3: y_unit * ((totalLineY/2) +1)
  };

  pointList["seven"] = { 
    x1: x_unit * (totalLineX-1), y1: y_unit * (totalLineY/2 + 1),
    x2: x_unit * (totalLineX-1), y2: y_unit * (totalLineY /2),
    x3: x_unit, y3: y_unit * (totalLineY /2)
  };

  pointList["eight"] = { 
    x1: x_unit * (totalLineX-1), y1: y_unit * ((totalLineY/2) + 1),
    x2: x_unit, y2: y_unit * ((totalLineY /2) + 1),
    x3: x_unit, y3: y_unit * (totalLineY /2)
  };

  pointList["nine"] = { 
    x1: x_unit * (totalLineX-1), y1: y_unit * ((totalLineY/2) + 1),
    x2: x_unit * (totalLineX-1), y2: (y_unit * ((totalLineY/2) + 1)) + constY,
    x3: x_unit * (totalLineX-2) + constX, y3:  y_unit * ((totalLineY/2) + 1)
  };

  pointList["ten"] = { 
    x1: x_unit * (totalLineX-1), y1: y_unit * (totalLineY - 1),
    x2: x_unit * (totalLineX-1), y2: (y_unit * (totalLineY-1) ) - constY,
    x3: x_unit * (totalLineX-2) + constX, y3:  y_unit * (totalLineY-1)
  };


  return pointList;
}