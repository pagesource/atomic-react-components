import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Tab from '../index';

describe('<Tab />', () => {
  let TabComponent = '';
  beforeEach(() => {
    TabComponent = shallow(<Tab>Test</Tab>);
  });

  test('should render correctly', () => {
    expect(TabComponent).toMatchSnapshot();
  });
});
