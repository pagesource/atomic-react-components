import React from 'react';
import { shallow } from 'enzyme';
import { CheckboxVanilla } from '../Checkbox';

describe('Checkbox Component', () => {
  let checkbox = '';
  beforeEach(() => {
    checkbox = shallow(<CheckboxVanilla name="test" id="name">Checkbox</CheckboxVanilla>);
  });

  test('should render correctly', () => {
    expect(checkbox).toMatchSnapshot();
  });

  test('should render disabled', () => {
    checkbox = shallow(<CheckboxVanilla name="test" id="name" disabled>Submit</CheckboxVanilla>);
    expect(checkbox.find({ disabled: true })).toHaveLength(1);
  });

  test('should render checked', () => {
    checkbox = shallow(<CheckboxVanilla name="test" id="name" checked>Submit</CheckboxVanilla>);
    expect(checkbox.find({ checked: true })).toHaveLength(1);
  });

  test('should render label as children if label prop is passed', () => {
    checkbox = shallow(<CheckboxVanilla name="test" id="name" label="checkbox label" />);
    expect(checkbox.find('span').text()).toEqual('checkbox label');
  });
});
