import { shallow, mount } from 'enzyme';

import AtomicCarousel from '../index';

describe('<AtomicCarousel />', () => {
  const AtomicCarouselComponent = shallow(
    <AtomicCarousel>
      <div className="1">Test1</div>
      <div className="2">Test2</div>
      <div className="3">Test3</div>
      <div className="4">Test4</div>
    </AtomicCarousel>
  );

  it('Should display first item initially', () => {
    expect(AtomicCarouselComponent.contains(<div className="1">Test1</div>)).toBe(true);
  });

  it('render without dots', () => {
    const wrapper = shallow(
      <AtomicCarousel dots={false}>
        <h1>Test</h1>
      </AtomicCarousel>
    );
    expect(wrapper.props().dots).toBe(false);
    expect(wrapper.find('.atomic-dots').length).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('render without navigation', () => {
    const wrapper = shallow(
      <AtomicCarousel navigation={false}>
        <h1>Test</h1>
      </AtomicCarousel>
    );
    expect(wrapper.props().navigation).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly', () => {
    expect(AtomicCarouselComponent).toMatchSnapshot();
  });
});
