import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Tooltip from '../index';

describe('<Tooltip />', () => {
  let TooltipComponent = '';
  beforeEach(() => {
    TooltipComponent = shallow(<Tooltip>Test</Tooltip>);
  });

  test('should render correctly', () => {
    expect(TooltipComponent).toMatchSnapshot();
  });
});
