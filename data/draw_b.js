export default function B(size = 16) {
  const pointList = {};
  const config = Config();

  const max_y = size;
  const max_x = max_y *  config['B'].ratio / 10;

  const totalLineY = 8;
  const y_unit = Math.round( max_y / totalLineY );

  const totalLineX = 3;
  const x_unit = Math.round( max_x / totalLineX );

  const constX = ( x_unit * 0.50 );
  const constY = ( y_unit * 0.50 );

  pointList["first"] = { 
    x1: x_unit, y1: 0,
    x2: x_unit, y2: y_unit,
    x3: x_unit * (totalLineX-1), y3: 0
  };

  pointList["second"] = { 
    x1: x_unit, y1: y_unit,
    x2: x_unit * (totalLineX-1), y2: 0,
    x3: x_unit * totalLineX, y3: y_unit
  };

  pointList["third"] = { 
    x1: x_unit + constX, y1: y_unit,
    x2: x_unit * (totalLineX-1), y2: y_unit + constY,
    x3: x_unit * totalLineX, y3: y_unit
  };

  pointList["forth"] = { 
    x1: x_unit + constX, y1: (3 * y_unit),
    x2: x_unit * (totalLineX-1), y2: (2 * y_unit) + constY,
    x3: x_unit * (totalLineX-1), y3: y_unit * (totalLineY/2)
  };

  pointList["fifth"] = { 
    x1: x_unit * (totalLineX-1), y1: y_unit *  (totalLineY/2),
    x2: x_unit * (totalLineX-1), y2: y_unit + constY,
    x3: x_unit * totalLineX, y3: y_unit
  };

  pointList["sixth"] = { 
    x1: x_unit * (totalLineX-1), y1: y_unit *  (totalLineY/2),
    x2: x_unit * totalLineX, y2: y_unit * ((totalLineY/2) - 1),
    x3: x_unit * totalLineX, y3: y_unit
  };

  pointList["seven"] = { 
    x1: x_unit, y1: y_unit * ((totalLineY/2) + 1),
    x2: x_unit, y2: y_unit * ((totalLineY/2) - 1),
    x3: x_unit + constX, y3:  y_unit * ((totalLineY/2) - 1)
  };

  pointList["eight"] = { 
    x1: x_unit, y1: y_unit * ((totalLineY/2) + 1),
    x2: x_unit * (totalLineX-1), y2: y_unit *  (totalLineY/2),
    x3: x_unit + constX, y3:  y_unit * ((totalLineY/2) - 1)
  };

  pointList["nine"] = { 
    x1: x_unit, y1: y_unit * ((totalLineY/2) + 1),
    x2: x_unit * (totalLineX-1), y2: y_unit *  (totalLineY/2),
    x3: x_unit * totalLineX, y3: y_unit * ((totalLineY/2) + 1),
  };

  pointList["ten"] = { 
    x1: x_unit + constX, y1: y_unit * ((totalLineY/2) + 1),
    x2: x_unit * (totalLineX-1), y2: y_unit * ((totalLineY/2) + 1) + constY,
    x3: x_unit * totalLineX, y3: y_unit * ((totalLineY/2) + 1),
  };

  pointList["eleven"] = { 
    x1: x_unit * totalLineX, y1: y_unit * (totalLineY-1),
    x2: x_unit * (totalLineX-1), y2: y_unit * ((totalLineY/2) + 1) + constY,
    x3: x_unit * totalLineX, y3: y_unit * ((totalLineY/2) + 1),
  };

  pointList["twelve"] = { 
    x1: x_unit * (totalLineX-1), y1: y_unit * totalLineY,
    x2: x_unit * totalLineX, y2: y_unit * (totalLineY-1),
    x3: x_unit * (totalLineX-1), y3: y_unit * ((totalLineY/2) + 1) + constY,
  };

  pointList["thirteen"] = { 
    x1: x_unit * (totalLineX-1), y1: y_unit * totalLineY,
    x2: x_unit + constX, y2: y_unit * (totalLineY-1),
    x3: x_unit * (totalLineX-1), y3: y_unit * (totalLineY-2) + constY,
  };

  pointList["fourteen"] = { 
    x1: x_unit, y1: y_unit * totalLineY,
    x2: x_unit, y2: y_unit * (totalLineY-1),
    x3: x_unit + constX, y3: y_unit * (totalLineY-1),
  };

  pointList["fifteen"] = { 
    x1: x_unit, y1: y_unit * totalLineY,
    x2: x_unit * (totalLineX-1), y2: y_unit * totalLineY,
    x3: x_unit + constX, y3: y_unit * (totalLineY-1),
  };

  pointList["sixteen"] = { 
    x1: 0, y1: 0,
    x2: x_unit, y2: 0,
    x3: 0, y3: y_unit * totalLineY,
  };

  pointList["seventeen"] = { 
    x1: x_unit, y1: 0,
    x2: x_unit, y2: y_unit * totalLineY,
    x3: 0, y3: y_unit * totalLineY,
  };

  return pointList;
}