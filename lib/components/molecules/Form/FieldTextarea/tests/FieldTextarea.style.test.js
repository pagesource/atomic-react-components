import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import FieldTextarea from '../FieldTextarea';

describe('FieldTextarea', () => {
  test('should render correctly', () => {
    expect(shallow(<FieldTextarea />)).toMatchSnapshot();
  });
});
