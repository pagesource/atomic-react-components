/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

const atomComponents = fs.readdirSync(path.join(__dirname, '../../lib/components/atoms'));
const moleculeComponents = fs.readdirSync(path.join(__dirname, '../../lib/components/molecules'));
const organismComponents = fs.readdirSync(path.join(__dirname, '../../lib/components/organisms'));
const templateComponents = fs.readdirSync(path.join(__dirname, '../../lib/components/templates'));
const components = atomComponents
  .concat(moleculeComponents)
  .concat(organismComponents)
  .concat(templateComponents);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
