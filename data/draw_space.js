function SPACE(size = 16) {
  const pointList = {};

  const max_y = size;
  const max_x = max_y * 5 / 10;

  const totalLineY = 6;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 4;
  const x_unit = Math.round( max_x / totalLineX );

  pointList["one"] = { 
    x1: 0, y1: y_unit * (totalLineY),
    x2: 0, y2: 0,
    x3: (x_unit * totalLineX), y3: 0
  };

  pointList["two"] = { 
    x1: 0, y1: y_unit * (totalLineY),
    x2: (x_unit * totalLineX), y2: y_unit * (totalLineY),
    x3: (x_unit * totalLineX), y3: 0
  };

  return pointList;
}