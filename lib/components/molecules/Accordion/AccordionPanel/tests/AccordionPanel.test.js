import React from 'react';
import { mount } from 'enzyme';

import { AccordionPanelVanilla } from '../index';

describe('<AccordionPanel />', () => {
  let AccordionPanelComponent = '';
  beforeEach(() => {
    AccordionPanelComponent = mount(<AccordionPanelVanilla>Test</AccordionPanelVanilla>);
  });

  test('should render', () => {
    expect(AccordionPanelComponent.exists()).toBe(true);
  });

  test('should render <div/>', () => {
    expect(AccordionPanelComponent.find('div').length).toEqual(1);
  });

  test('should render correctly', () => {
    expect(AccordionPanelComponent).toMatchSnapshot();
  });
});
