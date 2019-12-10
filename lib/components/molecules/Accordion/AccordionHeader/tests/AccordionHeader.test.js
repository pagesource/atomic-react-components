import React from 'react';
import { shallow, render } from 'enzyme';

import { AccordionHeaderVanilla } from '../index';

describe('<AccordionHeader />', () => {
  let AccordionHeaderComponent = '';
  beforeEach(() => {
    AccordionHeaderComponent = shallow(<AccordionHeaderVanilla>Test</AccordionHeaderVanilla>);
  });

  test('should render correctly', () => {
    expect(AccordionHeaderComponent).toMatchSnapshot();
  });
});
