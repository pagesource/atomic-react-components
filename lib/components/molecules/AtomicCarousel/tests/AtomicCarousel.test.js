import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AtomicCarouselVanilla } from '..';

configure({ adapter: new Adapter() });

describe('<AtomicCarousel />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <AtomicCarouselVanilla>
        <h1>Test1</h1>
        <h1>Test2</h1>
        <h1>Test3</h1>
        <h1>Test4</h1>
      </AtomicCarouselVanilla>
    );
  });

  it('Should render correctly', () => {
    expect(wrapper.exists('.atomic-dots')).toBe(true);
    expect(wrapper.exists('.previous')).toBe(true);
    expect(wrapper.exists('.next')).toBe(true);
    expect(wrapper.find('.carousel-slides').contains(<h1>Test1</h1>)).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render dots correctly', () => {
    wrapper.setProps({ dots: false });
    expect(wrapper.exists('.atomic-dots')).toBe(false);
  });

  it('Should render navigation correctly', () => {
    wrapper.setProps({ navigation: false });
    expect(wrapper.exists('.previous')).toBe(false);
    expect(wrapper.exists('.next')).toBe(false);
  });

  it('Should increase slideIndex on click next', () => {
    wrapper
      .find('button')
      .find('.next')
      .simulate('click');
    expect(wrapper.find('.carousel-slides').contains(<h1>Test2</h1>)).toEqual(true);
  });

  it('Should decrease slideIndex on click prev', () => {
    wrapper
      .find('button')
      .find('.next')
      .simulate('click');
    wrapper
      .find('button')
      .find('.next')
      .simulate('click');
    wrapper
      .find('button')
      .find('.previous')
      .simulate('click');
    expect(wrapper.find('.carousel-slides').contains(<h1>Test2</h1>)).toEqual(true);
  });

  it('Should show specific slideIndex on click specific dot', () => {
    wrapper
      .find('.atomic-dots')
      .find('Button')
      .at(2)
      .find('button')
      .simulate('click');
    expect(wrapper.find('.carousel-slides').contains(<h1>Test3</h1>)).toEqual(true);
  });

  it('Should show required number of slides', () => {
    const slideWrapper = jest
      .fn()
      .mockImplementation(slide => <div className="slide-item">{slide}</div>);
    wrapper.setProps({ perSlideFrame: 2 });
    expect(
      wrapper
        .find('.carousel-slides')
        .contains([slideWrapper(<h1>Test1</h1>), slideWrapper(<h1>Test2</h1>)])
    ).toEqual(true);
  });

  it('Should render next button Label correctly', () => {
    wrapper.setProps({ nextLabel: 'Next Item' });
    expect(
      wrapper
        .find('button')
        .find('.next')
        .text()
    ).toEqual('Next Item');
  });

  it('Should render previous button Label correctly', () => {
    wrapper.setProps({ prevLabel: 'Previous Item' });
    expect(
      wrapper
        .find('button')
        .find('.previous')
        .text()
    ).toEqual('Previous Item');
  });

  it('Should render heading text correctly', () => {
    wrapper.setProps({ heading: 'Featured Carousel' });
    expect(
      wrapper
        .find('.carousel-heading')
        .at(1)
        .text()
    ).toEqual('Featured Carousel');
  });

  it('Should render header correctly', () => {
    wrapper.setProps({ displayHeader: false });
    expect(wrapper.exists('#carousel')).toEqual(false);
  });

  it('Should render play/stop label correctly', () => {
    wrapper.setProps({ stopLabel: 'Stop Button' });
    wrapper.setProps({ playLabel: 'Play Button' });
    expect(
      wrapper
        .find('.animation-panel')
        .find('button')
        .text()
    ).toEqual('Stop Button');
    wrapper.unmount();
    wrapper.setProps({ autoPlay: false });
    wrapper.mount();
    expect(
      wrapper
        .find('.animation-panel')
        .find('button')
        .text()
    ).toEqual('Play Button');
  });

  it('Should render animation correctly', () => {
    const slideTransitionTime = 2000;
    wrapper.setProps({ slideTransitionTime });
    jest.useFakeTimers();
    setTimeout(() => {
      expect(wrapper.find('.carousel-slides').contains(<h1>Test1</h1>)).toEqual(true);
    }, slideTransitionTime);
    jest.runAllTimers();
  });
});
