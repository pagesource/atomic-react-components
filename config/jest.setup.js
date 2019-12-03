const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const lodash = require.requireActual('lodash');

configure({ adapter: new Adapter() });
lodash.uniqueId = (prefix = 'uniqueId_') => {
  return prefix + 1;
};
