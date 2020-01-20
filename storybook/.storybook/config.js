import { configure, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import theme from './theme';

addParameters({
  options: {
    theme,
  },
  docs: {
    page: DocsPage,
    container: DocsContainer,
  },
});

configure(
  [
    require.context('../stories/', true, /\.mdx$/),
    require.context('../stories/', true, /\.stories\.js$/),
  ],
  module
);
