import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import { SliderVanilla as Slider } from '../index';
import Slide from '../../Slide/Slide';

describe('<Slider />', () => {
  let SliderComponent = '';
  beforeEach(() => {
    SliderComponent = shallow(<Slider>Test</Slider>);
  });

  test('should render correctly', () => {
    expect(SliderComponent).toMatchSnapshot();
  });
});

describe('Slider Component', () => {
  let SliderComponent = '';
  beforeEach(() => {
    SliderComponent = shallow(
      <Slider>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </Slider>
    );
  });

  test('should render Slide component for every children', () => {
    expect(SliderComponent.find(Slide).length).toBe(3);
  });
});
