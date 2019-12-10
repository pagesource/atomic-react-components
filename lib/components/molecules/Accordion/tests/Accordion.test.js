import React from 'react';
import { mount } from 'enzyme';
// eslint-disable-next-line import/named
import { defaultAccordion } from '../Accordion.mock';
import Accordion from '../index';

describe('<Accordion />', () => {
  let AccordionComponent = '';

  beforeEach(() => {
    AccordionComponent = mount(<Accordion {...defaultAccordion} />);
  });

  test('accordion renders', () => {
    expect(AccordionComponent.exists()).toBe(true);
  });

  test('total number of accordion items equals', () => {
    expect(AccordionComponent.find('.accordion').children('details')).toHaveLength(
      defaultAccordion.accordionContent.length
    );
  });

  test('accordion panel opening on click', () => {
    const elem = AccordionComponent.find('.accordion-item').at(0);
    elem.simulate('click');
    expect(elem.getDOMNode().open).toBe(true);
  });

  test('should render correctly', () => {
    expect(AccordionComponent).toMatchSnapshot();
  });
});
