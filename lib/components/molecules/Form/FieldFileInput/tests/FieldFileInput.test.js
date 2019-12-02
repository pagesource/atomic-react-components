import React from 'react';
import { shallow, render } from 'enzyme';
import { FieldFileInput } from '../FieldFileInput';
import Button from '../../../../atoms/Button';

describe('FieldInput Component', () => {
  let FieldInput = '';
  beforeEach(() => {
    FieldInput = shallow(<FieldFileInput />);
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

  test('should render button with type = "button" and text = "".', () => {
    const buttonProps = {
      secondary: true,
      type: 'button',
    };
    FieldInput = render(<Button {...buttonProps}>Choose file(s)</Button>);
    expect(FieldInput.find('button')).toHaveLength(1);
  });
});
