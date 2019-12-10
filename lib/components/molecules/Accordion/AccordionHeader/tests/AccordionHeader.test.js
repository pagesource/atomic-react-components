import React from 'react';
import { shallow, render } from 'enzyme';

import { AccordionHeaderVanilla } from '../index';

describe('<AccordionHeader />', () => {
  let AccordionHeaderComponent = '';
  beforeEach(() => {
    AccordionHeaderComponent = shallow(<AccordionHeaderVanilla>Test</AccordionHeaderVanilla>);
  });

  test('should render', () => {
  	expect(AccordionHeaderComponent.exists()).toBe(true);
  });

  test('should render correctly', () => {
    expect(AccordionHeaderComponent).toMatchSnapshot();
  });
});
