import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '@xt-pagesource/atomic-react-themes';

import Input from '../Input';

describe('Input Styled component', () => {
  test('should render correctly', () => {
    const input = shallow(
      <ThemeProvider theme={theme}>
        <Input value={10} name="userName" />
      </ThemeProvider>
    );
    expect(input).toMatchSnapshot();
  });
});
