const cssIncludes = [];

if (process.env.NODE_ENV === 'development') {
  cssIncludes.push(''); // External CSS files to be loaded
}

export default cssIncludes.map((src, index) => ({
  id: `css-include-${index}`,
  src,
}));
