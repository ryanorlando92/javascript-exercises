const ftoc = function(f) {
  const c = ( (f - 32) / 1.8 );
  return Math.round( (c + Number.EPSILON) * 10 ) / 10;
};

const ctof = function(c) {
  const f = ( (c * 1.8) + 32 );
  return Math.round( (f + Number.EPSILON) * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
