import React from 'react';

import { shallowWithTheme, renderWithTheme } from '../../../../../../__mock__/themeMock';
import { FieldFileInput } from '../FieldFileInput';

describe('FieldInput Component', () => {
  let FieldInput = '';
  beforeEach(() => {
    FieldInput = shallowWithTheme(<FieldFileInput />);
  });

  test('should render correctly', () => {
    expect(FieldInput).toMatchSnapshot();
  });

  test('should render Input component with proper type for multiple file upload.', () => {
    const fileMultipleInputProps = {
      name: 'fileupload',
      type: 'file',
      multiple: true,
    };
    FieldInput = renderWithTheme(<FieldFileInput {...fileMultipleInputProps} />);
    expect(FieldInput.find('input[type=file]')).toHaveLength(1);
  });

  test('should render Input component with proper type for single file upload.', () => {
    const fileMultipleInputProps = {
      name: 'fileupload',
      type: 'file',
    };
    FieldInput = renderWithTheme(<FieldFileInput {...fileMultipleInputProps} />);
    expect(FieldInput.find('input[type=file]')).toHaveLength(1);
  });

  test('should render button with type = "button" and text = "".', () => {
    const fileMultipleInputProps = {
      name: 'fileupload',
      type: 'file',
    };
    FieldInput = renderWithTheme(<FieldFileInput {...fileMultipleInputProps} />);
    expect(FieldInput.find('button')).toHaveLength(2);
  });
});
