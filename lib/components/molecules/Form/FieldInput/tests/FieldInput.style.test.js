import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import FieldInput from '../FieldInput';

describe('FieldInput', () => {
  test('should render correctly', () => {
    expect(shallow(<FieldInput />)).toMatchSnapshot();
  });
});
