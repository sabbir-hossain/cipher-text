import { config } from "../helper/share.js";

export default function V(size = 16) {
  const pointList = {};

  const max_y = size;
  const max_x = max_y *  config['V'].ratio / 10;

  const totalLineY = 6;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 5;
  const x_unit = Math.round( max_x / totalLineX );

  const constX = ( x_unit * 0.50 );
  const constY = ( y_unit * 0.50 );
  // const graphics = new Graphics(ctx, size, 0, 0);

  // graphics.line((x_unit * (totalLineX/2)), 0, (x_unit * (totalLineX/2)), y_unit)


  pointList["one"] = { 
    x1: 0, y1: y_unit * (totalLineY),
    x2: 0, y2: y_unit * (totalLineY -1) - constY,
    x3: (x_unit * (totalLineX/2)), y3: 0
  };

  pointList["two"] = { 
    x1: 0, y1: y_unit * (totalLineY),
    x2: (x_unit * (totalLineX/2)), y2:y_unit  + constY,
    x3: (x_unit * (totalLineX/2)), y3: 0
  };

  pointList["seven"] = { 
    x1: x_unit * totalLineX, y1: y_unit * (totalLineY),
    x2: x_unit * totalLineX, y2: y_unit * (totalLineY -1) - constY,
    x3: (x_unit * (totalLineX/2)), y3: 0
  };

  pointList["eight"] = { 
    x1: x_unit * totalLineX, y1: y_unit * (totalLineY),
    x2: (x_unit * (totalLineX/2)), y2:y_unit  + constY,
    x3: (x_unit * (totalLineX/2)), y3: 0
  };

  return pointList;
}