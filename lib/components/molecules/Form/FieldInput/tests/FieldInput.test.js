import React from 'react';
import { shallow, render } from 'enzyme';
import { FieldInputVanilla } from '../FieldInput';

describe('FieldInput Component', () => {
  let FieldInput = '';

  test('should render correctly', () => {
    FieldInput = shallow(<FieldInputVanilla />);
    expect(FieldInput).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    const props = {
      label: 'Enter username',
    };
    FieldInput = render(<FieldInputVanilla {...props} />);
    expect(FieldInput.find('label').text()).toEqual('Enter username');
  });

  test('should render Input component with proper type', () => {
    const props = {
      name: 'email',
      type: 'email',
      id: 'email',
    };
    FieldInput = render(<FieldInputVanilla {...props} />);
    expect(FieldInput.find('input[type=email]')).toHaveLength(1);
  });
});
