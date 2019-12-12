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

  test('should render <div/>', () => {
    expect(AccordionComponent.find('div').length).toEqual(1);
  });

  test('should render correctly', () => {
    expect(AccordionComponent).toMatchSnapshot();
  });
});
