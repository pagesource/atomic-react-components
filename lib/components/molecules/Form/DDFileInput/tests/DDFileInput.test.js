import React from 'react';
import { shallow, render } from 'enzyme';
import { DDFieldInput } from '../DDFileInput';

describe('DDFieldInput Component', () => {
  let DDFieldInput = '';
  beforeEach(() => {
    DDFieldInput = shallow(<DDFieldInput />);
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
    DDFieldInput = render(<DDFieldInput {...fileMultipleInputProps} />);
    expect(DDFieldInput.find('input[type=file]')).toHaveLength(1);
  });
});
