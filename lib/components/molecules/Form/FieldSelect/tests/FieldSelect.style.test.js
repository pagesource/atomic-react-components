import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import FieldSelect from '../FieldSelect';

describe('FieldSelect', () => {
  test('should render correctly', () => {
    expect(shallow(<FieldSelect />)).toMatchSnapshot();
  });
});
