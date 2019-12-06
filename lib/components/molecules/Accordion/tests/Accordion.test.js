import React from 'react';
import { shallow, mount } from 'enzyme';
import { defaultAccordion } from '../Accordion.mock';
import Accordion from '../index';

describe('<Accordion />', () => {
  let AccordionComponent = '';

  beforeEach(() => {
    AccordionComponent = mount(<Accordion {...defaultAccordion} />);
  });

  test("accordion renders", () => {
  	expect(AccordionComponent.exists()).toBe(true);
  });

  test("accordion contains accordion items", () => {
  	expect(AccordionComponent.find('.accordion-item').length).toEqual(3);
  });

  test("accordion contains accordion panel", () => {
  	expect(AccordionComponent.find('.accordion-panel').length).toEqual(3);
  });

  test('should render correctly', () => {
    expect(AccordionComponent).toMatchSnapshot();
  });
});