import React from 'react';
import { mount } from 'enzyme';
import Accordion from '../index';

describe('<Accordion />', () => {
  let AccordionComponent = '';

  beforeEach(() => {
    AccordionComponent = mount(
      <Accordion>
        <Accordion.Panel id="1" defaultExpanded renderPanelBody={() => <p>test</p>}>
          <Accordion.Panel.Header />
        </Accordion.Panel>
        <Accordion.Panel id="2" renderPanelBody={() => <p>test 2</p>}>
          <Accordion.Panel.Header />
        </Accordion.Panel>
        <Accordion.Panel id="3" disabled renderPanelBody={() => <p>test 2</p>}>
          <Accordion.Panel.Header />
        </Accordion.Panel>
      </Accordion>
    );
  });

  test('accordion renders', () => {
    expect(AccordionComponent.exists()).toBe(true);
  });

  test('should render details', () => {
    expect(AccordionComponent.find('details').length).toEqual(3);
  });

  test('should render summary', () => {
    expect(AccordionComponent.find('summary').length).toEqual(3);
  });

  test('should open the first panel by default', () => {
    expect(AccordionComponent.find('summary').first().props()).toHaveProperty(
      'aria-expanded',
      true
    );
    expect(AccordionComponent.find('summary').at(1).props()).toHaveProperty('aria-expanded', false);
  });

  test('panel opens on click of header', () => {
    AccordionComponent.find('summary').at(1).simulate('click');
    expect(AccordionComponent.find('summary').first().props()).toHaveProperty(
      'aria-expanded',
      false
    );
    expect(AccordionComponent.find('summary').at(1).props()).toHaveProperty('aria-expanded', true);
  });

  test('should not open the disabled panel', () => {
    AccordionComponent.find('summary').last().simulate('click');
    expect(AccordionComponent.find('summary').last().props()).toHaveProperty(
      'aria-expanded',
      false
    );
  });
  test('should render correctly', () => {
    expect(AccordionComponent).toMatchSnapshot();
  });
});
