import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Carousal from '../index';

describe('<Carousal />', () => {
  let CarousalComponent = '';
  beforeEach(() => {
    CarousalComponent = shallow(<Carousal>Test</Carousal>);
  });

  test('should render correctly', () => {
    expect(CarousalComponent).toMatchSnapshot();
  });
});
