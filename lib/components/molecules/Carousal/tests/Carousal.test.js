import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import { CarousalVanilla as Carousal } from '../index';
import Dots from '../Dots';

describe('<Carousal />', () => {
  let CarousalComponent = '';
  beforeEach(() => {
    CarousalComponent = shallow(
      <Carousal showDots>
        <p>Slide 1</p>
        <p>Slide 2</p>
        <p>Slide 3</p>
      </Carousal>
    );
  });

  test('should render correctly', () => {
    expect(CarousalComponent).toMatchSnapshot();
  });
});

describe('Carousal Component', () => {
  let CarousalComponent = '';
  beforeEach(() => {
    CarousalComponent = shallow(
      <Carousal showDots>
        <p>Slide 1</p>
        <p>Slide 2</p>
        <p>Slide 3</p>
      </Carousal>
    );
  });

  test('should make first slide as active on load', () => {
    expect(CarousalComponent.state('current')).toBe(0);
  });

  test('should render left arrow as disabled', () => {
    expect(
      CarousalComponent.find('.arrow')
        .first()
        .prop('disabled')
    ).toBe(true);
  });

  test('on click on right arrow, should increase current state by 1', () => {
    const currentState = CarousalComponent.state('current');
    CarousalComponent.find('.arrow.right').simulate('click');
    expect(CarousalComponent.state('current')).toBe(currentState + 1);
  });

  test('on click on left arrow, should decrease current state  by 1', () => {
    CarousalComponent.setState({ current: 2 });
    CarousalComponent.find('.arrow')
      .first()
      .simulate('click');
    expect(CarousalComponent.state('current')).toBe(1);
  });

  test('should not render arrows if showArrow prop is false', () => {
    CarousalComponent.setProps({
      showArrows: false,
    });
    expect(CarousalComponent.find('.arrow').length).toBe(0);
  });

  test('should not render arrows if showDots prop is false', () => {
    CarousalComponent.setProps({
      showDots: false,
    });
    expect(CarousalComponent.find(Dots).length).toBe(0);
  });
});
