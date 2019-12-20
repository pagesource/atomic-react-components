import React from 'react';
import { mount } from 'enzyme';
import { StickyHeaderVanilla } from '../StickyHeader';

describe('Test render <StickyHeader /> Component', () => {
  let Component;

  // const mockUseEffect = () => {
  //   useEffect.mockImplementationOnce(f => f());
  // };

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

  it('should test isSticky state false on render', () => {
    expect(Component.find('div').props().isSticky).toBeFalsy();
  });
});

/* describe('Should test isSticky true using hooks', () => {
  let component;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    component = shallow(<StickyHeaderVanilla />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('test isSticky true after setSticky method call', () => {
    //component.find('div').props().setSticky(true);
    console.log('=====',component.find('div'));

    expect(component.find('div').props().isSticky).toBeTruthy();

  });
}); */
