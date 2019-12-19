import React from 'react';

import { shallowWithTheme } from '../../../../../../__mock__/themeMock';
import FieldCheckbox from '../FieldCheckbox';

describe('FieldCheckbox Component', () => {
  let checkBoxWrapper = '';
  beforeEach(() => {
    checkBoxWrapper = shallowWithTheme(<FieldCheckbox />);
  });

  test('should render correctly', () => {
    expect(checkBoxWrapper).toMatchSnapshot();
  });
});
