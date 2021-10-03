import { charConfig as config } from "./config_char.js";

export default function I(size = 16) {
  const pointList = {};

  const max_y = size;
  const max_x = max_y *  config['I'].ratio / 10;

  const totalLineY = 8;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 3;
  const x_unit = Math.round( max_x / totalLineX );
  // const constX = ( x_unit * 0.50 );
  // const constY = ( y_unit * 0.50 );
  // const graphics = new Graphics(ctx, size, 0, 0);

  pointList["one"] = { 
    x1: 0, y1: 0,
    x2: x_unit * totalLineX, y2: 0,
    x3: 0, y3: y_unit
  };

  pointList["two"] = { 
    x1: x_unit * totalLineX, y1: y_unit,
    x2: x_unit * totalLineX, y2: 0,
    x3: 0, y3: y_unit
  };

  pointList["three"] = { 
    x1: x_unit, y1: y_unit,
    x2: x_unit*(totalLineX-1), y2: y_unit,
    x3: x_unit, y3: y_unit * (totalLineY - 1)
  };

  pointList["four"] = { 
    x1: x_unit * (totalLineX-1), y1: y_unit,
    x2: x_unit * (totalLineX-1), y2: y_unit * (totalLineY - 1),
    x3: x_unit, y3: y_unit * (totalLineY - 1)
  };

  pointList["five"] = { 
    x1: 0, y1: y_unit * totalLineY,
    x2: x_unit * totalLineX, y2: y_unit * totalLineY,
    x3: 0, y3:  y_unit * (totalLineY-1)
  };

  pointList["six"] = { 
    x1: x_unit * totalLineX, y1: y_unit * totalLineY,
    x2: x_unit * totalLineX, y2: y_unit * (totalLineY-1),
    x3: 0, y3:  y_unit * (totalLineY-1)
  };

  return pointList;
}