import React from 'react';

import { shallowWithTheme } from '../../../../../../__mock__/themeMock';
import { DDFieldInput } from '../DDFileInput';

describe('DDFieldInput Component', () => {
  let ddField = '';
  beforeEach(() => {
    ddField = shallowWithTheme(<DDFieldInput />);
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
    ddField = shallowWithTheme(<DDFieldInput {...fileMultipleInputProps} />);
    expect(ddField.find('div')).toHaveLength(1);
  });
});