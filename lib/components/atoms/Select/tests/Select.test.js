import React from 'react';
import { shallow, render } from 'enzyme';
import { SelectVanilla } from '../Select';

describe('Select Component', () => {
  let input = '';
  const props = {
    id: 'dropdown-1',
    name: 'my-drop',
    elementLocator: 'my-custom-select-locator',
    onChange: () => {},
  };

  test('should render correctly', () => {
    input = shallow(<SelectVanilla options={['Option 1', 'Option 2']} {...props} />);
    expect(input).toMatchSnapshot();
  });
  test('should check the data attribute of dropdown/select', () => {
    const select = render(<SelectVanilla options={['Option 1', 'Option 2']} {...props} />);

    expect(select.attr('data-locator')).toEqual(`${props.elementLocator}`);
  });
});
