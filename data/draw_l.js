export default function L(size = 16) {
  const pointList = {};

  const config = Config();

  const max_y = size;
  const max_x = max_y *  config['L'].ratio / 10;

  const totalLineY = 8;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 5;
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
    x1: x_unit, y1: 0,
    x2: x_unit, y2: y_unit,
    x3: x_unit * totalLineX, y3: y_unit
  };

  pointList["four"] = { 
    x1: x_unit, y1: 0,
    x2: x_unit * totalLineX, y2: 0,
    x3: x_unit * totalLineX, y3: y_unit
  };

  return pointList;
}