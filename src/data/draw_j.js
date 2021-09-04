import { config } from "../helper/share.js";

export default function J(size = 16) {
  const pointList = {};

  // const graphics = new Graphics(ctx, size, 0, 0);
  const max_y = size;
  const max_x = max_y *  config['J'].ratio / 10;

  const totalLineY = 8;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 5;
  const x_unit = Math.round( max_x / totalLineX );

  const constX = ( x_unit * 0.5 );
  const constY = ( y_unit * 0.5 );

  // console.log({ constX, constY, x_unit, y_unit })

  pointList["one"] = { 
    x1: 0, y1: y_unit * totalLineY,
    x2: 0, y2: y_unit * (totalLineY - 1) ,
    x3: x_unit * totalLineX, y3: y_unit * (totalLineY - 1)
  };

  pointList["two"] = { 
    x1: 0, y1: y_unit * totalLineY,
    x2: x_unit * totalLineX, y2: y_unit * totalLineY,
    x3: x_unit * totalLineX, y3: y_unit * (totalLineY - 1)
  };

  pointList["three"] = { 
    x1: x_unit * (totalLineX - 1), y1: y_unit * (totalLineY - 1),
    x2: x_unit * totalLineX, y2: y_unit * (totalLineY - 1),
    x3: x_unit * totalLineX, y3: y_unit
  };

  pointList["four"] = { 
    x1: x_unit * (totalLineX - 1), y1: y_unit * (totalLineY - 1),
    x2: x_unit * (totalLineX - 1), y2: y_unit,
    x3: x_unit * totalLineX, y3: y_unit
  };

  pointList["five"] = { 
    x1: x_unit * totalLineX, y1: y_unit,
    x2: x_unit * (totalLineX - 1), y2: 0,
    x3: x_unit, y3: y_unit
  };

  pointList["six"] = { 
    x1: x_unit * (totalLineX-1), y1: 0,
    x2: x_unit, y2: 0,
    x3: x_unit, y3: y_unit
  };

  pointList["seven"] = { 
    x1: 0, y1: y_unit,
    x2: x_unit, y2: 0,
    x3: x_unit, y3: y_unit * 3
  };

  pointList["eight"] = { 
    x1: 0, y1: y_unit,
    x2: 0, y2: y_unit * 3,
    x3: x_unit, y3: y_unit * 3
  };

  pointList["nine"] = { 
    x1: x_unit * (totalLineX-2) + constX, y1: y_unit,
    x2: x_unit * (totalLineX-1), y2: y_unit,
    x3: x_unit * (totalLineX-1), y3: y_unit + constY
  };

  pointList["ten"] = { 
    x1: x_unit + constX, y1: y_unit,
    x2: x_unit, y2: y_unit,
    x3: x_unit, y3: y_unit + constY
  };

  return pointList;
}