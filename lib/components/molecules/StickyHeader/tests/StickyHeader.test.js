import React from 'react';
import { shallow, mount } from 'enzyme';
import { StickyHeaderVanilla } from '../StickyHeader';

describe('Test render <StickyHeader /> Component', () => {
  let Component;

  beforeEach(() => {
    Component = mount(<StickyHeaderVanilla />);
  });

  it('should render Header element', () => {
    expect(Component.find('header').length).toEqual(1);
  });

  it('should test children prop', () => {
    Component = mount(
      <StickyHeaderVanilla>
        <h1>Header</h1>
      </StickyHeaderVanilla>
    );

    expect(Component.props().children).toEqual(<h1>Header</h1>);
  });

  it('Should test component render correctly', () => {
    expect(Component).toMatchSnapshot();
  });
});

describe('should test component on window add or remove event', () => {
  let Component;
  const events = {};
  const setSticky = jest.fn();

  jest.spyOn(React, 'useState').mockImplementation((isSticky) => [isSticky, setSticky]);
  jest.spyOn(React, 'useEffect').mockImplementation(() => {});

  it('should test component on window addEventListener', () => {
    jest.spyOn(window, 'addEventListener').mockImplementation((event, handle) => {
      events[event] = handle;
    });

    Component = mount(<StickyHeaderVanilla />);
    events.scroll();
    console.log('1111111====', Component.find('div').html());

    expect(Component.find('div').hasClass('no-sticky')).toBeTruthy();
  });

  it('should test component on window removeEventListener', () => {
    jest.spyOn(window, 'removeEventListener').mockImplementation((event) => {
      events[event] = undefined;
    });

    Component = mount(<StickyHeaderVanilla />);
    events.scroll();
    console.log('2222222222===', Component.find('div').html());

    expect(Component.find('div').hasClass('no-sticky')).toBeTruthy();
  });

  it('should render tag from props', () => {
    Component = shallow(<StickyHeaderVanilla tag="nav" />);
    expect(Component.find('nav').length).toEqual(1);
  });

  it('should contain content class', () => {
    expect(Component.find('nav').hasClass('content')).toBeTruthy();
  });
});
