import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import InputControl from '../InputControl';
import Theme from '../../../../styles/theme';

describe('InputControl', () => {
  let inputControl = '';
  const theme = { ...Theme };

  test('should render radio correctly', () => {
    inputControl = shallow(<InputControl theme={theme} type="radio" />);
    expect(inputControl).toMatchSnapshot();
  });

  test('should render checkbox correctly', () => {
    inputControl = shallow(<InputControl theme={theme} type="checkbox" />);
    expect(inputControl).toMatchSnapshot();
  });
});
