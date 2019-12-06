import React from 'react';

import { shallowWithTheme } from '../../../../../__mock__/themeMock';
import { FileInput } from '../FileInput';

describe('Input Component', () => {
  let input = '';
  const sampleProps = {
    elementLocator: 'my-input-field',
    name: 'my-input',
    type: 'file',
    value: 'abc',
    onChange: () => {},
  };
  test('should render correctly', () => {
    input = shallowWithTheme(<FileInput {...sampleProps} />);
    expect(input).toMatchSnapshot();
  });
});
