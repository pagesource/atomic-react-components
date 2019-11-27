// Spacing generate with multiple of 8 and few spacial cases (2, 4, 1289).
const MAX_SPACING_UNITS = 20;
const spacingGenerator = () => {
  const spacing = {};
  let remLastUnit = 0;
  const remIncrementUnit = 0.5; // Equal to 8 pixel
  for (let i = 1; i <= MAX_SPACING_UNITS; i += 1) {
    remLastUnit += remIncrementUnit;
    spacing[`unit${i}`] = `${remLastUnit}rem`;
  }
  spacing.quadUnit = '0.125rem';
  spacing.halfUnit = '0.25rem';
  spacing.maxContent = '80rem';
  return spacing;
};

export default spacingGenerator();
