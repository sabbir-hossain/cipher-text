function U(size = 16) {
  const pointList = {};

  const config = Config();

  const max_y = size;
  const max_x = max_y *  config['U'].ratio / 10;

  const totalLineY = 6;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 4;
  const x_unit = Math.round( max_x / totalLineX );

  const constX = ( x_unit * 0.50 );
  const constY = ( y_unit * 0.50 );

  pointList["one"] = { 
    x1: 0, y1: y_unit,
    x2: x_unit, y2: 0,
    x3: 0, y3: y_unit * totalLineY,
  };

  pointList["two"] = { 
    x1: x_unit, y1: y_unit,
    x2: x_unit + constX, y2: y_unit,
    x3: x_unit, y3: y_unit + constY,
  };

  pointList["three"] = { 
    x1: x_unit, y1: 0,
    x2: x_unit, y2: y_unit * totalLineY,
    x3: 0, y3: y_unit * totalLineY,
  };

  pointList["four"] = { 
    x1: x_unit, y1: 0,
    x2: x_unit, y2: y_unit,
    x3: x_unit * (totalLineX - 1), y3: 0
  };

  pointList["five"] = { 
    x1: x_unit, y1: y_unit,
    x2: x_unit * (totalLineX - 1), y2: 0,
    x3: x_unit * totalLineX, y3: y_unit
  };

  pointList["six"] = { 
    x1: (x_unit * 2) + constX, y1: y_unit,
    x2: x_unit * (totalLineX - 1), y2: y_unit + constY,
    x3: x_unit * (totalLineX - 1), y3: y_unit
  };

  pointList["seven"] = { 
    x1: x_unit * (totalLineX - 1), y1: y_unit,
    x2: x_unit * (totalLineX - 1), y2: y_unit * totalLineY,
    x3: x_unit * totalLineX, y3: y_unit,
  };

  pointList["eight"] = { 
    x1: x_unit * (totalLineX - 1), y1: y_unit * totalLineY,
    x2: x_unit * totalLineX, y2: y_unit * totalLineY,
    x3: x_unit * totalLineX, y3: y_unit,
  };

  return pointList;
}