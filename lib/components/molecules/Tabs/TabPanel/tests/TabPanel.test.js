import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import TabPanel from '../index';

describe('<TabPanel />', () => {
  let TabPanelComponent = '';
  beforeEach(() => {
    TabPanelComponent = shallow(<TabPanel>Test</TabPanel>);
  });

  test('should render correctly', () => {
    expect(TabPanelComponent).toMatchSnapshot();
  });
});
