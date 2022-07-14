const easeInQuad = (t, b, c, d) => {
  return c * (t /= d) * t + b;
};

const linear = (t, b, c, d) => {
  return (c * t) / d + b;
};

const easeOutQuint = (t, b, c, d) => {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
};