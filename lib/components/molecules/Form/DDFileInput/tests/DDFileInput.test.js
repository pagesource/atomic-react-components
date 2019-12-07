import React from 'react';

import { shallowWithTheme } from '../../../../../../__mock__/themeMock';
import { DDFieldInput } from '../DDFileInput';

const defaultProps = {
  name: 'fileupload',
  type: 'file',
};

const getWrapperSetup = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return shallowWithTheme(<DDFieldInput {...finalProps} />);
};

describe('DDFieldInput Component', () => {
  let ddField = '';
  beforeEach(() => {
    ddField = getWrapperSetup();
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
    ddField = getWrapperSetup(fileMultipleInputProps);
    expect(ddField.find('div')).toHaveLength(1);
  });
  test('should render text correctly', () => {
    expect(ddField.find('div').text()).toContain('Drop Files Here...');
  });
  test('should render the component with prop correctly', () => {
    expect(ddField.find('div').prop('role')).toBeTruthy();
  });
});
