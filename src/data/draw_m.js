import { charConfig as config } from "./config_char.js";

export default function M(size = 16) {
  const pointList = {};

  const max_y = size;
  const max_x = max_y *  config['M'].ratio / 10;

  const totalLineY = 8;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 7;
  const x_unit = Math.round( max_x / totalLineX );

  const constX = ( x_unit * 0.50 );
  const constY = ( y_unit * 0.50 );
  // const graphics = new Graphics(ctx, size, 0, 0);

  // graphics.line((x_unit * (totalLineX/2)), y_unit * (totalLineY/2), (x_unit * (totalLineX/2)), y_unit * (totalLineY/2 + 1))

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
    x1: x_unit * totalLineX, y1: y_unit * totalLineY,
    x2: x_unit * totalLineX, y2: 0,
    x3: x_unit * (totalLineX-1), y3: 0
  };

  pointList["four"] = { 
    x1: x_unit * totalLineX, y1: y_unit * totalLineY,
    x2: x_unit * (totalLineX-1), y2:  y_unit * totalLineY,
    x3: x_unit * (totalLineX-1), y3: 0
  };

  pointList["five"] = { 
    x1: x_unit, y1: y_unit * (totalLineY),
    x2: x_unit, y2: y_unit * (totalLineY -1) - constY,
    x3: (x_unit * (totalLineX/2)), y3: y_unit * (totalLineY/2)
  };

  pointList["six"] = { 
    x1: x_unit, y1: y_unit * (totalLineY),
    x2: (x_unit * (totalLineX/2)), y2: (y_unit * (totalLineY/2 + 1)) + constY,
    x3: (x_unit * (totalLineX/2)), y3: y_unit * (totalLineY/2)
  };

  pointList["seven"] = { 
    x1: x_unit * (totalLineX - 1), y1: y_unit * (totalLineY),
    x2: x_unit * (totalLineX - 1), y2: y_unit * (totalLineY -1) - constY,
    x3: (x_unit * (totalLineX/2)), y3: y_unit * (totalLineY/2)
  };

  pointList["eight"] = { 
    x1: x_unit * (totalLineX - 1), y1: y_unit * (totalLineY),
    x2: (x_unit * (totalLineX/2)), y2: (y_unit * (totalLineY/2 + 1)) + constY,
    x3: (x_unit * (totalLineX/2)), y3: y_unit * (totalLineY/2)
  };

  return pointList;
}