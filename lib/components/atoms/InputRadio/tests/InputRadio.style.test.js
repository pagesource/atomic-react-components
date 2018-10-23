import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import InputRadio from '../InputRadio';
import Theme from '../../../../styles/theme';

describe('InputRadio', () => {
  let inputRadio = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    inputRadio = shallow(<InputRadio theme={theme} />);
    expect(inputRadio).toMatchSnapshot();
  });
});
