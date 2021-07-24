function draw_d(size = 16) {
  const pointList = {};

  const max_y = size;
  const max_x = max_y * 6/ 10;

  const totalLineY = 8;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 4;
  const x_unit = Math.round( max_x / totalLineX );

  const constX = ( x_unit * 0.50 );
  const constY = ( y_unit * 0.50 );

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
    x1: x_unit, y1: 0,
    x2: x_unit, y2: y_unit,
    x3: x_unit * (totalLineX-1), y3: 0
  };

  pointList["four"] = { 
    x1: x_unit, y1: y_unit,
    x2: x_unit * (totalLineX-1), y2: 0,
    x3: x_unit * totalLineX, y3: y_unit
  };

  pointList["five"] = { 
    x1: (x_unit * 2) + constX, y1: y_unit,
    x2: x_unit * (totalLineX-1), y2: y_unit + constY,
    x3: x_unit * (totalLineX-1), y3: y_unit
  };


  pointList["six"] = { 
    x1: x_unit, y1: (totalLineY * y_unit),
    x2: x_unit, y2: ((totalLineY-1) * y_unit),
    x3: x_unit * (totalLineX-1), y3: (totalLineY * y_unit)
  };

  pointList["seven"] = { 
    x1: x_unit, y1: ((totalLineY-1) * y_unit),
    x2: x_unit * totalLineX, y2: ((totalLineY-1) * y_unit),
    x3: x_unit * (totalLineX-1), y3: (totalLineY * y_unit)
  };

  // pointList["ten"] = { 
  //   x1: x_unit * (totalLineX-1), y1: ((totalLineY-1) * y_unit),
  //   x2: x_unit * (totalLineX-1), y2: y_unit * 6,
  //   x3: x_unit * totalLineX, y3: y_unit * 6
  // };

  // pointList["eleven"] = { 
  //   x1: x_unit * (totalLineX-1), y1: ((totalLineY-1) * y_unit),
  //   x2: x_unit * totalLineX, y2: ((totalLineY-1) * y_unit),
  //   x3: x_unit * totalLineX, y3: y_unit * 6
  // };

  pointList["eight"] = { 
    x1: (x_unit * 2) + constX, y1: ((totalLineY-1) * y_unit),
    x2: x_unit * (totalLineX-1), y2: ((totalLineY-1) * y_unit),
    x3: x_unit * (totalLineX-1), y3: (y_unit * 6) + constY
  };

  pointList["nine"] = { 
    x1: x_unit * (totalLineX-1), y1: y_unit,
    x2: x_unit * totalLineX, y2: y_unit,
    x3: x_unit * totalLineX, y3: y_unit * (totalLineY-1)
  };

  pointList["ten"] = { 
    x1: x_unit * (totalLineX-1), y1: ((totalLineY-1) * y_unit),
    x2: x_unit * (totalLineX-1), y2: y_unit,
    x3: x_unit * totalLineX, y3: y_unit * (totalLineY-1)
  };

  return pointList;
}