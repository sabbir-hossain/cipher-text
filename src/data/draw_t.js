import { charConfig as config } from "./config.js";

export default function T(size = 16) {
  const pointList = {};

  const max_y = size;
  const max_x = max_y *  config['T'].ratio / 10;

  const totalLineY = 8;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 5;
  const x_unit = Math.round( max_x / totalLineX );

  const constX = ( x_unit * 0.50 );
  const constY = ( y_unit * 0.50 );
  // const graphics = new Graphics(ctx, size, 0, 0);

  pointList["one"] = { 
    x1: 0, y1: y_unit * totalLineY,
    x2: x_unit * (totalLineX), y2: y_unit * totalLineY,
    x3: 0, y3: y_unit * (totalLineY-1)
  };

  pointList["two"] = { 
    x1: x_unit * (totalLineX), y1: y_unit * (totalLineY-1),
    x2: x_unit * (totalLineX), y2: y_unit * totalLineY,
    x3: 0, y3: y_unit * (totalLineY-1)
  };

  pointList["three"] = { 
    x1: (x_unit * (totalLineX/2)) - constX, y1: 0,
    x2: (x_unit * (totalLineX/2)) + constX, y2: 0,
    x3: (x_unit * (totalLineX/2)) + constX , y3: y_unit * (totalLineY - 1)
  };

  pointList["four"] = { 
    x1: (x_unit * (totalLineX/2)) - constX, y1: 0,
    x2:(x_unit * (totalLineX/2)) - constX, y2: y_unit * (totalLineY - 1),
    x3: (x_unit * (totalLineX/2)) + constX, y3: y_unit * (totalLineY - 1)
  };

  // console.log({
  //   totalLineX,
  //   x_unit,
  //   constX,
  //   val: (x_unit * (totalLineX/2)),
  //   val2: (x_unit * (totalLineX/2)) + constX
  // })

  return pointList;
}