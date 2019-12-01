const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const lodash = require.requireActual('lodash');

configure({ adapter: new Adapter() });
lodash.uniqueId = () => {
  return 1;
};
