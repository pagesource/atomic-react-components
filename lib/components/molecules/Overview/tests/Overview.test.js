import React from 'react';
import { shallow, mount } from 'enzyme';
import { OverviewVanilla } from '../index';
import { defaultConfig } from '../Overview.mock';

describe('<Overview to render', () => {
  let overviewComponent;

  test('should render correctly', () => {
    overviewComponent = shallow(<OverviewVanilla />);
    expect(overviewComponent).toMatchSnapshot();
  });

  test('Should open on click of trigger button', () => {
    overviewComponent = mount(<OverviewVanilla {...defaultConfig} />);
    expect(overviewComponent.find('.overview__body').length).toEqual(0);
    expect(overviewComponent.state().isOpen).toEqual(false);
    overviewComponent
      .find('button')
      .at(0)
      .simulate('click');
    expect(overviewComponent.state().isOpen).toEqual(true);
    expect(overviewComponent.find('.overview__body').length).toEqual(1);
  });
});
