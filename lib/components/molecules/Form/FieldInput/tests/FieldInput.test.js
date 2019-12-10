import React from 'react';
import toJson from 'enzyme-to-json';
import { shallowWithTheme, renderWithTheme } from '../../../../../../__mock__/themeMock';
import { FieldInputVanilla } from '../FieldInput';

describe('FieldInput Component', () => {
  let FieldInput = '';

  test.only('should render correctly', () => {
    FieldInput = shallowWithTheme(<FieldInputVanilla />);
    expect(toJson(FieldInput)).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    const props = {
      label: 'Enter username',
    };
    FieldInput = renderWithTheme(<FieldInputVanilla {...props} />);
    expect(FieldInput.find('label').text()).toEqual('Enter username');
  });

  test('should render Input component with proper type', () => {
    const props = {
      name: 'email',
      type: 'email',
      id: 'email',
    };
    FieldInput = renderWithTheme(<FieldInputVanilla {...props} />);
    expect(FieldInput.find('input[type=email]')).toHaveLength(1);
  });
});
