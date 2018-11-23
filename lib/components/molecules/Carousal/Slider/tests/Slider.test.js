import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Slider from '../index';

describe('<Slider />', () => {
  let SliderComponent = '';
  beforeEach(() => {
    SliderComponent = shallow(<Slider>Test</Slider>);
  });

  test('should render correctly', () => {
    expect(SliderComponent).toMatchSnapshot();
  });
});
