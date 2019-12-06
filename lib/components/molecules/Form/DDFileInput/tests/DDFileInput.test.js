import React from 'react';
import { shallow, render } from 'enzyme';
import { DDFieldInput } from '../DDFileInput';

describe('DDFieldInput Component', () => {
  let ddField = '';
  beforeEach(() => {
    ddField = shallow(<DDFieldInput />);
  });

  test('should render correctly', () => {
    expect(ddField).toMatchSnapshot();
  });

  test('should render Input component with proper type for multiple file upload.', () => {
    const fileMultipleInputProps = {
      name: 'fileupload',
      type: 'file',
      multiple: true,
    };
    ddField = render(<DDFieldInput {...fileMultipleInputProps} />);
    expect(ddField.find('input[type=file]')).toHaveLength(1);
  });
});
