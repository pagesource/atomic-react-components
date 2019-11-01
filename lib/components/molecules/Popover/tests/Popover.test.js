import React from 'react';
import { shallow, mount } from 'enzyme';

import { PopoverVanilla } from '../index';

const interactivePopover = {
  className: 'example',
  popOverHeader: 'This is a popover header text',
  trigger: <button id="popover-trigger">Click to Open</button>,
};

describe('<Popover /> Rendering', () => {
  let PopoverComponent;
  beforeEach(() => {
    PopoverComponent = shallow(<PopoverVanilla>Test</PopoverVanilla>);
  });

  test('should render correctly', () => {
    expect(PopoverComponent).toMatchSnapshot();
  });
});

describe('Popover functional behavior', () => {
  let PopoverComponent;

  test('Should have Close Button By Default and can be closed', () => {
    PopoverComponent = mount(
      <PopoverVanilla {...interactivePopover} isVisible>
        Test
      </PopoverVanilla>
    );
    expect(PopoverComponent.find('.popover__close').length).toEqual(1);
    PopoverComponent = mount(
      <PopoverVanilla {...interactivePopover} hidePopoverCloseBtn>
        Test
      </PopoverVanilla>
    );
    expect(PopoverComponent.find('.popover__close').length).toEqual(0);
  });

  test('Should open By Default when isVisible set to true', () => {
    PopoverComponent = mount(
      <PopoverVanilla {...interactivePopover} isVisible>
        Test
      </PopoverVanilla>
    );
    expect(PopoverComponent.find('.popover__header').length).toEqual(1);
  });

  test('Should open and close on Trigger and X button click', () => {
    PopoverComponent = mount(
      <div>
        <p className="test">Test Content</p>
        <PopoverVanilla {...interactivePopover}>Test</PopoverVanilla>
      </div>
    );
    // Test Default Open through trigger
    PopoverComponent.find('#popover-trigger').simulate('click');
    expect(PopoverComponent.find('.popover__header').length).toEqual(1);
    // Test Close Popover when clicking outside through trigger the popover
    // Test Close through X button
    PopoverComponent.find('.popover__close').simulate('click');
    expect(PopoverComponent.find('.popover__header').length).toEqual(0);
  });
});
