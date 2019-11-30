import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import InputChoice from '../InputChoice';
import Theme from '../../../../styles/themes/base';

describe('InputChoice', () => {
  let inputControl = '';
  const theme = { ...Theme };

  test('should render radio correctly', () => {
    inputControl = shallow(<InputChoice theme={theme} type="radio" id="test_1" name="test_1" />);
    expect(inputControl).toMatchSnapshot();
  });

  test('should render checkbox correctly', () => {
    inputControl = shallow(<InputChoice theme={theme} type="checkbox" id="test_2" name="test_2" />);
    expect(inputControl).toMatchSnapshot();
  });
});
