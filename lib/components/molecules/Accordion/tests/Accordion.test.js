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
          <Accordion.panel.header>{defaultAccordion.accordionHeader}</Accordion.panel.header>
          <p>{defaultAccordion.accordionPanelContent}</p>
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

  test('should render details', () => {
    expect(AccordionComponent.find('details').length).toEqual(1);
  });

  test('should render summary', () => {
    expect(AccordionComponent.find('summary').length).toEqual(1);
  });

  test('check the header text', () => {
    expect(AccordionComponent.find('summary').text()).toBe(defaultAccordion.accordionHeader);
  });

  test('check the panel content', () => {
    expect(AccordionComponent.find('p').text()).toBe(defaultAccordion.accordionPanelContent);
  });

  test('panel opens on click of header', () => {
    AccordionComponent.find('summary').simulate('click');
    expect(AccordionComponent.find('summary').props()).toHaveProperty('aria-expanded', true);
  });

  test('should render correctly', () => {
    expect(AccordionComponent).toMatchSnapshot();
  });
});
