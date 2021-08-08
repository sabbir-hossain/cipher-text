import { config } from "../helper/share.js";

export default function Z(size = 16) {
  const pointList = {};

  const max_y = size;
  const max_x = max_y *  config['Z'].ratio / 10;

  const totalLineY = 6;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 5;
  const x_unit = Math.round( max_x / totalLineX );

  const constX = ( x_unit * 0.50 );
  const constY = ( y_unit * 0.50 );
  // const graphics = new Graphics(ctx, size, 0, 0);

  // graphics.line((x_unit * (totalLineX/2)), y_unit * (totalLineY/2), (x_unit * (totalLineX/2)), y_unit * (totalLineY/2 + 1))

  pointList["one"] = { 
    x1: 0, y1: y_unit * totalLineY,
    x2: 0, y2: (y_unit * (totalLineY-1)),
    x3: x_unit * (totalLineX), y3: y_unit * totalLineY
  };

  pointList["two"] = { 
    x1: 0, y1: y_unit * (totalLineY-1),
    x2: x_unit * (totalLineX ), y2:  y_unit * (totalLineY-1),
    x3: x_unit * (totalLineX), y3:y_unit * (totalLineY)
  };

  pointList["three"] = { 
    x1: 0, y1: 0,
    x2: 0, y2: (y_unit ),
    x3: x_unit * (totalLineX), y3: y_unit * (totalLineY)
  };

  pointList["four"] = { 
    x1: 0, y1: 0,
    x2: x_unit * (totalLineX ), y2: y_unit * (totalLineY-1),
    x3: x_unit * (totalLineX), y3: y_unit * (totalLineY)
  };

  pointList["five"] = { 
    x1: 0, y1: 0,
    x2: 0, y2: (y_unit ),
    x3: x_unit * (totalLineX), y3:0
  };

  pointList["six"] = { 
    x1: 0, y1: (y_unit ),
    x2: x_unit * (totalLineX), y2: (y_unit ),
    x3: x_unit * (totalLineX), y3:0
  };

  return pointList;
}