// Spacing generate with multiple of 8 and few spacial cases (2, 4, 1289).
const MAX_SPACING_UNITS = 20;
const spacingGenerator = () => {
  const spacing = {};
  let remLastUnit = 0;
  const remIncrementUnit = 0.5; // Equal to 8 pixel
  for (let i = 1; i <= MAX_SPACING_UNITS; i += 1) {
    remLastUnit += remIncrementUnit;
    spacing[`UNIT_${i}`] = `${remLastUnit}rem`;
  }
  spacing.QUAD_UNIT = '0.125rem';
  spacing.HALF_UNIT = '0.25rem';
  spacing.MAX_CONTENT = '80rem';
  return spacing;
};

export default spacingGenerator();
