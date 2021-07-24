function intersection_two_line(
  line1 = throwError('intersection_two_line/line1'), 
  line2 = throwError('intersection_two_line/line2') ) {

  const { a1=0, b1=0, c1=0} = line1 || {};
  const { a2=0, b2=0, c2=0} = line2 || {};

  const value = (a1*b2) - (a2*b1);
  if(value ===0) {
    throw new Error(`value cannot be divided by 0. ${
      JSON.stringify(line1, null, 3)
    } ${
      JSON.stringify(line2, null, 3)}`)
  }

  const { a, b } = {
    "a": Math.round(  
      ( (b1*c2) - (b2*c1) ) / value  
    ),
    "b": Math.round( 
      ( (a2*c1) - (a1*c2) ) / value 
    )
  } 

  return { a, b };
}

function get_slope(
  point1 = throwError('get_slope/point1'), 
  point2 = throwError('get_slope/point2') 
) {

  const {x1=0, y1=0} = point1 || {};
  const {x2=0, y2=0} = point2 || {};

  const value = (x2-x1);

  if(value ===0) {
    throw new Error(
      `value cannot be divided by 0. ${
        JSON.stringify(point1, null, 3)
      } ${
        JSON.stringify(point2, null, 3)
      }`
    )
  }

  return ((y2-y1) / value)
}

function get_const_value(
  point1 = throwError('get_const_value/point1'), 
  point2 = throwError('get_const_value/point2')
 ) {
  const slope = get_slope(point1, point2);

  // const {x1=0, y1=0} = point1 || {};
  const {x2=0, y2=0} = point2 || {};

  const a = slope;
  const b = 1;
  const c = (slope * x2) + y2; 
  // console.log({slope, x2, y2, point1, point2, a, b, c,
  //   val: (slope * x2),
  //   val2: (slope * x2) + y2,

  // })
  return {a, b, c};
}