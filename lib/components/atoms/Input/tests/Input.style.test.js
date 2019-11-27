import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Input from '../Input';
// eslint-disable-next-line import/no-unresolved
import Theme from '../../../../styles/theme';

describe('Input Styled component', () => {
  const theme = { ...Theme };

  test('should render correctly', () => {
    const input = shallow(<Input theme={theme} value={10} name="userName" />);
    expect(input).toMatchSnapshot();
  });
});
