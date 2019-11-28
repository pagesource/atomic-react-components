import React from 'react';
import { shallow, render } from 'enzyme';
import { FieldFileInput } from '../FieldFileInput';

describe('FieldInput Component', () => {
  let FieldInput = '';

  test('should render correctly', () => {
    FieldInput = shallow(<FieldFileInput />);
    expect(FieldInput).toMatchSnapshot();
  });

  test('should render Input component with proper type for multiple file upload.', () => {
    const fileMultipleInputProps = {
      name: 'fileupload',
      type: 'file',
      multiple: true,
    };
    FieldInput = render(<FieldFileInput {...fileMultipleInputProps} />);
    expect(FieldInput.find('input[type=file]')).toHaveLength(1);
  });

  test('should render Input component with proper type for single file upload.', () => {
    const fileMultipleInputProps = {
      name: 'fileupload',
      type: 'file',
    };
    FieldInput = render(<FieldFileInput {...fileMultipleInputProps} />);
    expect(FieldInput.find('input[type=file]')).toHaveLength(1);
  });
});
