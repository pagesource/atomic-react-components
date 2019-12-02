import React from 'react';
import { shallow, render } from 'enzyme';
import { FieldFileInput } from '../DDFileInput';
import Button from '../../../../atoms/Button';

describe('DDFieldInput Component', () => {
  let DDFieldInput = '';
  beforeEach(() => {
    DDFieldInput = shallow(<FieldFileInput />);
  });

  test('should render correctly', () => {
    expect(DDFieldInput).toMatchSnapshot();
  });

  test('should render Input component with proper type for multiple file upload.', () => {
    const fileMultipleInputProps = {
      name: 'fileupload',
      type: 'file',
      multiple: true,
    };
    DDFieldInput = render(<FieldFileInput {...fileMultipleInputProps} />);
    expect(DDFieldInput.find('input[type=file]')).toHaveLength(1);
  });
});
