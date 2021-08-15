import { config } from "../helper/share.js";

export default function Q(size = 16) {
  const pointList = {};

  const max_y = size;
  const max_x = max_y *  config['Q'].ratio / 10;

  const totalLineY = 12;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 7;
  const x_unit = Math.round( max_x / totalLineX );

  // const constX = ( x_unit * 0.50 );
  // const constY = ( y_unit * 0.50 );

  pointList["one"] = { 
    x1: 0, y1: y_unit * 3,
    x2: x_unit, y2: 0,
    x3: 0, y3: y_unit * (totalLineY - 3)
  };

  pointList["two"] = { 
    x1: x_unit, y1: 0,
    x2: x_unit, y2: y_unit * totalLineY,
    x3: 0, y3: y_unit * (totalLineY - 3)
  };

  pointList["three"] = { 
    x1: x_unit, y1: y_unit,
    x2: x_unit, y2: 0,
    x3: x_unit * (totalLineX - 1), y3: 0
  };

  pointList["four"] = { 
    x1: x_unit, y1: y_unit,
    x2: x_unit * (totalLineX - 1), y2: y_unit,
    x3: x_unit * (totalLineX - 1), y3: 0
  };

  pointList["five"] = { 
    x1: x_unit * (totalLineX - 1), y1: 0,
    x2: x_unit * (totalLineX - 1), y2: y_unit * totalLineY,
    x3: x_unit * totalLineX, y3:  y_unit * (totalLineY - 3)
  };

  pointList["six"] = { 
    x1: x_unit * (totalLineX - 1), y1: 0,
    x2: x_unit * totalLineX, y2: y_unit *3,
    x3: x_unit * totalLineX, y3:  y_unit * (totalLineY - 3)
  };

  pointList["seven"] = { 
    x1: x_unit, y1: y_unit,
    x2: x_unit, y2: y_unit * 4,
    x3: x_unit * 2, y3: y_unit
  };

  pointList["eight"] = { 
    x1: x_unit * ( totalLineX - 2), y1: y_unit,
    x2: x_unit * ( totalLineX - 1), y2: (4 * y_unit),
    x3: x_unit * ( totalLineX - 1), y3: y_unit
  };

  pointList["nine"] = { 
    x1: (x_unit * 3), y1: (3 * y_unit),
    x2: (x_unit * 4), y2: (4 * y_unit),
    x3: x_unit * totalLineX, y3: 0
  };

  pointList["ten"] = { 
    x1: (x_unit * 4), y1: (4 * y_unit),
    x2: x_unit * (totalLineX + 1), y2: y_unit,
    x3: x_unit * totalLineX, y3: 0
  };

  pointList["eleven"] = { 
    x1: x_unit, y1: y_unit * totalLineY,
    x2: x_unit, y2: y_unit * (totalLineY - 1),
    x3: x_unit * (totalLineX - 1), y3: y_unit * (totalLineY - 1),
  };

  pointList["twelve"] = { 
    x1: x_unit, y1: y_unit * totalLineY,
    x2: x_unit * (totalLineX -1), y2: y_unit * (totalLineY - 1),
    x3: x_unit * (totalLineX - 1), y3: y_unit * (totalLineY ),
  };

  pointList["thirteen"] = { 
    x1: x_unit, y1: y_unit * (totalLineY - 4),
    x2: x_unit * 2, y2: y_unit * (totalLineY - 1),
    x3: x_unit, y3: y_unit * (totalLineY -1),
  };

  pointList["fourteen"] = { 
    x1: x_unit * (totalLineX - 2), y1: y_unit * (totalLineY - 1),
    x2: x_unit * (totalLineX - 1), y2: y_unit * (totalLineY - 1),
    x3: x_unit * (totalLineX - 1), y3: y_unit * (totalLineY - 4),
  };


  return pointList;
}