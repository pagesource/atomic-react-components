/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

const atomComponents = fs.readdirSync(path.join(__dirname, '../../lib/components/atoms'));
const moleculeComponents = fs.readdirSync(path.join(__dirname, '../../lib/components/molecules'));
const components = atomComponents.concat(moleculeComponents);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
