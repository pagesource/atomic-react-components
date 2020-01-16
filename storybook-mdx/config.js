import { configure, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import theme from './theme';

addParameters({
  options: {
    theme: theme,
  },
  docs: {
    page: DocsPage,
    container: DocsContainer,
  },
});

configure([require.context('../lib/components/', true, /\.mdx$/)], module);
