import React from 'react';
import { mount } from 'enzyme';
// eslint-disable-next-line import/named
import { defaultAccordion } from '../Accordion.mock';
import Accordion from '../index';

describe('<Accordion />', () => {
  let AccordionComponent = '';

  beforeEach(() => {
    AccordionComponent = mount(
      <Accordion {...defaultAccordion}>
        <Accordion.panel>
          <Accordion.panel.header></Accordion.panel.header>
        </Accordion.panel>
      </Accordion>
    );
  });

  test('accordion renders', () => {
    expect(AccordionComponent.exists()).toBe(true);
  });

  test('should render <div/>', () => {
    expect(AccordionComponent.find('div').length).toEqual(1);
  });

  test('should render <details/>', () => {
    expect(AccordionComponent.find('details').length).toEqual(1);
  });

  test('should render <summary/>', () => {
    expect(AccordionComponent.find('summary').length).toEqual(1);
  });

  test('should render correctly', () => {
    expect(AccordionComponent).toMatchSnapshot();
  });
});
