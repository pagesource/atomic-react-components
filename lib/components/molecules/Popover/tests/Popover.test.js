import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Popover from '../index';

describe('<Popover />', () => {
  let PopoverComponent = '';
  beforeEach(() => {
    PopoverComponent = shallow(<Popover>Test</Popover>);
  });

  test('should render correctly', () => {
    expect(PopoverComponent).toMatchSnapshot();
  });
});
