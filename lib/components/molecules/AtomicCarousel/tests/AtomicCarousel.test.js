import React from 'react';
import { shallow } from 'enzyme';
import AtomicCarousel from '..';
import { mountWithTheme } from '../../../../../__mock__/themeMock';

describe('<AtomicCarousel />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(
      <AtomicCarousel>
        <h1>Test1</h1>
        <h1>Test2</h1>
        <h1>Test3</h1>
        <h1>Test4</h1>
      </AtomicCarousel>
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
    const shallowWrapper = shallow(
      <AtomicCarousel>
        <h1>Test1</h1>
        <h1>Test2</h1>
        <h1>Test3</h1>
        <h1>Test4</h1>
      </AtomicCarousel>
    );
    shallowWrapper.setProps({ dots: false });
    expect(shallowWrapper.exists('.atomic-dots')).toBe(false);
  });

  it('Should render navigation correctly', () => {
    const shallowWrapper = shallow(
      <AtomicCarousel>
        <h1>Test1</h1>
        <h1>Test2</h1>
        <h1>Test3</h1>
        <h1>Test4</h1>
      </AtomicCarousel>
    );
    shallowWrapper.setProps({ navigation: false });
    expect(shallowWrapper.exists('.previous')).toBe(false);
    expect(shallowWrapper.exists('.next')).toBe(false);
  });

  it('Should increase slideIndex on click next', () => {
    wrapper
      .find('button')
      .find('[data-action="next"]')
      .simulate('click');
    expect(wrapper.find('.carousel-slides').contains(<h1>Test2</h1>)).toEqual(true);
  });

  it('Should increase slideIndex on key press next', () => {
    wrapper
      .find('button')
      .find('[data-action="next"]')
      .simulate('keyUp', { key: 'ArrowRight' });
    expect(wrapper.find('.carousel-slides').contains(<h1>Test2</h1>)).toEqual(true);
  });

  it('Should decrease slideIndex on click prev', () => {
    wrapper
      .find('button')
      .find('[data-action="next"]')
      .simulate('click');
    wrapper
      .find('button')
      .find('[data-action="next"]')
      .simulate('click');
    wrapper
      .find('button')
      .find('[data-action="prev"]')
      .simulate('click');
    expect(wrapper.find('.carousel-slides').contains(<h1>Test2</h1>)).toEqual(true);
  });

  it('Should decrease slideIndex on key press prev', () => {
    wrapper
      .find('button')
      .find('[data-action="next"]')
      .simulate('keyUp', { key: 'ArrowRight' });
    expect(wrapper.find('.carousel-slides').contains(<h1>Test2</h1>)).toEqual(true);
  });

  it('Should show specific slideIndex on click specific dot', () => {
    wrapper
      .find('.atomic-item')
      .at(2)
      .find('Button')
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
    const shallowWrapper = shallow(
      <AtomicCarousel>
        <h1>Test1</h1>
        <h1>Test2</h1>
        <h1>Test3</h1>
        <h1>Test4</h1>
      </AtomicCarousel>
    );
    shallowWrapper.setProps({ displayHeader: false });
    expect(shallowWrapper.exists('#carousel')).toEqual(false);
  });

  it('Should render animation correctly', () => {
    const slideTransitionTime = 2000;
    wrapper.setProps({ slideTransitionTime });
    setTimeout(() => {
      expect(wrapper.find('.carousel-slides').contains(<h1>Test1</h1>)).toEqual(true);
    }, slideTransitionTime * 2);
  });
});
