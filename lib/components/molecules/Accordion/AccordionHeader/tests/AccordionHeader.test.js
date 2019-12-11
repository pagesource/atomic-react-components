import React from 'react';
import { shallow } from 'enzyme';

import { AccordionHeaderVanilla } from '../index';

describe('<AccordionHeader />', () => {
  let AccordionHeaderComponent = '';
  beforeEach(() => {
    AccordionHeaderComponent = shallow(<AccordionHeaderVanilla>Test</AccordionHeaderVanilla>);
  });

  test('should render', () => {
    expect(AccordionHeaderComponent.exists()).toBe(true);
  });

  test('renders <summary/>', () => {
    expect(AccordionHeaderComponent.find('summary').length).toEqual(1);
  });

  test('should render correctly', () => {
    expect(AccordionHeaderComponent).toMatchSnapshot();
  });
});
