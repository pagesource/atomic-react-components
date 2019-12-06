import React from 'react';
import { shallowWithTheme, renderWithTheme } from '../../../../../../__mock__/themeMock';
import { FieldSelectVanilla } from '../FieldSelect';

describe('FieldInput Component', () => {
  let FieldInput = '';

  test.only('should render correctly', () => {
    FieldInput = shallowWithTheme(<FieldSelectVanilla />);
    expect(FieldInput).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    const props = {
      label: 'Select Fav Color',
      options: ['red', 'black', 'blue'],
    };
    FieldInput = renderWithTheme(<FieldSelectVanilla {...props} />);
    expect(FieldInput.find('label').text()).toEqual('Select Fav Color');
  });

  test('should render select tag', () => {
    const props = {
      options: ['red', 'black', 'blue'],
    };
    FieldInput = renderWithTheme(<FieldSelectVanilla {...props} />);
    expect(FieldInput.find('select')).toHaveLength(1);
  });
});
