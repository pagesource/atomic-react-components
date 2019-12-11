import React from 'react';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount, shallow, render } from 'enzyme';

import themeMock from '../lib/styles/themes/base';

// eslint-disable-next-line react/prop-types
const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={themeMock}>{children}</ThemeProvider>
);

export const shallowWithTheme = tree =>
  shallow(tree, {
    wrappingComponent: ThemeProviderWrapper,
  });

export const mountWithTheme = tree =>
  mount(tree, {
    wrappingComponent: ThemeProviderWrapper,
  });

export const renderWithTheme = tree => render(<ThemeProviderWrapper>{tree}</ThemeProviderWrapper>);
