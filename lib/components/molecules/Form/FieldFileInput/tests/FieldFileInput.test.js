import React from 'react';

import { shallowWithTheme } from '../../../../../../__mock__/themeMock';
import { FieldFileInput } from '../FieldFileInput';

describe('FieldInput Component', () => {
  let FieldInput = '';
  beforeEach(() => {
    FieldInput = shallowWithTheme(<FieldFileInput />);
  });

  test('should render correctly', () => {
    expect(FieldInput).toMatchSnapshot();
  });

  test('should render button with type = "button" and text = "".', () => {
    const fileMultipleInputProps = {
      name: 'fileupload',
      type: 'file',
    };
    FieldInput = shallowWithTheme(<FieldFileInput {...fileMultipleInputProps} />);
    expect(FieldInput.find('Button')).toHaveLength(2);
  });
});
