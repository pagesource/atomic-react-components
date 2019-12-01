const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });
global.uniqueIDincrement = 1;

const mockedDate = new Date(2019, 12, 1);

global.Date = class extends Date {
  constructor() {
    super();
    return mockedDate;
  }
};
