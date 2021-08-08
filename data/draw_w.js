import { config } from "../helper/share.js";

export default function W(size = 16) {
  const pointList = {};

  const max_y = size;
  const max_x = max_y *  config['W'].ratio / 10;

  const totalLineY = 5;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 7;
  const x_unit = Math.round( max_x / totalLineX );

  const constX = ( x_unit * 0.50 );
  const constY = ( y_unit * 0.50 );
  const graphics = new Graphics(ctx, size, 0, 0);

  graphics.line((x_unit * (totalLineX/2)), (y_unit * (totalLineY/2)), (x_unit * (totalLineX/2)), (y_unit * (totalLineY/2 + 1)))

  graphics.line((x_unit * (totalLineX/4)), 0, (x_unit * (totalLineX/4)), y_unit)

  graphics.line(max_x - (x_unit * (totalLineX/4)), 0, max_x - (x_unit * (totalLineX/4)), y_unit)


  pointList["one"] = { 
    x1: 0, y1: y_unit * (totalLineY),
    x2: 0, y2: y_unit * (totalLineY -1) - constY,
    x3: (x_unit * (totalLineX/4)), y3: 0
  };

  pointList["two"] = { 
    x1: 0, y1: y_unit * (totalLineY),
    x2: (x_unit * (totalLineX/4)), y2: y_unit + constY,
    x3: (x_unit * (totalLineX/4)), y3: 0
  };

  pointList["three"] = { 
    x1: (x_unit * (totalLineX/2)), y1: (y_unit * (totalLineY/2)),
    x2: (x_unit * (totalLineX/4)), y2: y_unit + constY,
    x3: (x_unit * (totalLineX/4)), y3: 0
  };

  pointList["four"] = { 
    x1: (x_unit * (totalLineX/2)), y1: (y_unit * (totalLineY/2)),
    x2: (x_unit * (totalLineX/4)), y2: y_unit + constY,
    x3: (x_unit * (totalLineX/2)), y3: (y_unit * (totalLineY/2  + 1))
  };

  pointList["five"] = { 
    x1: (x_unit * (totalLineX/2)), y1: (y_unit * (totalLineY/2)),
    x2: max_x - (x_unit * (totalLineX/4)), y2: 0,
    x3: (x_unit * (totalLineX/2)), y3: (y_unit * (totalLineY/2  + 1))
  };

  pointList["six"] = { 
    x1: (x_unit * (totalLineX/2)), y1: (y_unit * (totalLineY/2 + 1)),
    x2: max_x - (x_unit * (totalLineX/4)), y2: 0,
    x3: max_x - (x_unit * (totalLineX/4)), y3: y_unit+ constY
  };

  pointList["seven"] = { 
    x1: (x_unit * totalLineX), y1: (y_unit * (totalLineY)),
    x2: max_x - (x_unit * (totalLineX/4)), y2: 0,
    x3: max_x - (x_unit * (totalLineX/4)), y3: y_unit + constY
  };

  pointList["eight"] = { 
    x1: (x_unit * totalLineX), y1: (y_unit * (totalLineY)),
    x2: (x_unit * totalLineX), y2: (y_unit * (totalLineY - 1)) - constY,
    x3: max_x - (x_unit * (totalLineX/4)), y3: 0
  };


  return pointList;
}