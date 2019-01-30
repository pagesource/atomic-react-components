import React from 'react';
import { shallow } from 'enzyme';
import { PopoverWrapperVanilla } from '../Popover';
import defaultConfig from '../Popover.mock';

describe('Popover Component', () => {
  let popover;

  test('should render correctly and match snapshot', () => {
    popover = shallow(<PopoverWrapperVanilla {...defaultConfig}>Click</PopoverWrapperVanilla>);
    expect(popover).toMatchSnapshot();
  });
});
