import { charConfig as config } from "./config_char.js";
import { get_slope } from "../helper/math.js"

export default function A(size = 16) {
  const pointList = {};

  const max_y = size;
  const max_x = max_y * config['A'].ratio / 10;

  const mid_x = max_x / 2;
  const mid_y = max_y / 2;

  const totalLine1 = 3;
  const unit = Math.round( mid_y / totalLine1 );

  // line equation is: y = slope * x
  pointList["first_triangle"] = {x1: 0, y1: 0};
  pointList["second_triangle"] = {x1: 0, y1: 0};
  // graphics.circle(0, 0);

  // now if we mirror, we will get opposite co-ordinates
  // graphics.circle(max_x, 0);
  pointList["third_triangle"] = {x1: max_x, y1: 0};
  pointList["forth_triangle"] = {x1: max_x, y1: 0};

  // graphics.circle(mid_x, max_y);
  pointList["first_triangle"] = {...pointList["first_triangle"], x2: mid_x, y2: max_y};
  pointList["third_triangle"] = {...pointList["third_triangle"], x2: mid_x, y2: max_y};

  const constant = (2*unit);
  const slope = get_slope({x1:0, y1:0}, {x2:mid_x, y2:max_y});
  // after adding constant, 
  // line equation is: y = slope * x - constant

  let y1 = 0;
  let x1 = constant / slope;
  // graphics.circle(x1, y1);
  pointList["second_triangle"] = {...pointList["second_triangle"], x2: x1, y2: y1};

  // now if we mirror, we will get opposite co-ordinates
  // graphics.circle(max_x - x1, y1);
  pointList["forth_triangle"] = {...pointList["forth_triangle"], x2: max_x - x1, y2: y1};

  // we have another line equation with is parallel to x-axis
  // so it will be: x = mid_x;
  x1 = mid_x;
  y1 = (slope * x1) - constant;
  // graphics.circle(x1, y1);
  pointList["first_triangle"] = {...pointList["first_triangle"], x3: x1, y3: y1};
  pointList["second_triangle"] = {...pointList["second_triangle"], x3: x1, y3: y1};

  pointList["third_triangle"] = {...pointList["third_triangle"], x3: x1, y3: y1};
  pointList["forth_triangle"] = {...pointList["forth_triangle"], x3: x1, y3: y1};

  // from equation: y = slope * x - constant
  // if we know y, then we can find value of x
  const yy1 = 2.5 * unit;
  const xx1 = (yy1 + constant) / slope;
  // graphics.circle(xx1, yy1);

  pointList["fifth_triangle"] = {x1: xx1, y1: yy1};
  pointList["sixth_triangle"] = {x1: xx1, y1: yy1};

  // mirror co-ordinate
  // graphics.circle(max_x - xx1, yy1);
  pointList["sixth_triangle"] = {...pointList["sixth_triangle"], x2: max_x - xx1, y2: yy1};

  const yy2 = yy1 - unit/1.5;
  const xx2 = (yy2 + constant) / slope;
  // graphics.circle(xx2, yy2);
  pointList["fifth_triangle"] = {...pointList["fifth_triangle"], x2: xx2, y2: yy2};

  // mirror co-ordinate
  // graphics.circle(max_x - xx2, yy2);
  pointList["fifth_triangle"] = {...pointList["fifth_triangle"], x3: max_x - xx2, y3: yy2};
  pointList["sixth_triangle"] = {...pointList["sixth_triangle"], x3: max_x - xx2, y3: yy2};

  return pointList;
}

export function bg_A( block_number_x=10, unit_height=19) {
  const pointList = {};

  const block_number_y = block_number_x * config['A'].ratio / 10;

  const unit_width = unit_height * config['A'].ratio / 10;

  
}