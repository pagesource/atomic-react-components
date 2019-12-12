import 'react-app-polyfill/ie11';
import React from 'react';
import { configure, setAddon, addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';
import { withTests } from '@storybook/addon-jest';
import { withA11y } from '@storybook/addon-a11y';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/styles/themes/base/index';
import '../lib/styles/cssIncludes';
import GlobalStyles from '../lib/styles';
import results from '../.jest-test-results.json';

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withDesign);
addDecorator(
  withTests({
    results,
  })
);

addDecorator((storyFn, context) => (
  <React.Fragment>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{storyFn(context)}</ThemeProvider>
  </React.Fragment>
));

const cssReq = require.context('!!raw-loader!../lib/styles/themes/base/tokens/', true, /.\.css$/);
const cssTokenFiles = cssReq
  .keys()
  .map(filename => ({ filename, content: cssReq(filename).default }));

const svgIconsReq = require.context('!!raw-loader!../lib/styles/themes/base', true, /.\.svg$/);
const svgIconTokenFiles = svgIconsReq
  .keys()
  .map(filename => ({ filename, content: svgIconsReq(filename).default }));

addParameters({
  options: {
    name: `Atomic React Pattern Library`,
    url: 'https://github.com/pagesource/atomic-react-components',
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/GBCGqs11KNeUyPksQzEMw0hr/Wireframing/duplicate?node-id=0%3A1', // TODO: to be updated as per style guide later
  },
  designToken: {
    files: {
      css: cssTokenFiles,
      svgIcons: svgIconTokenFiles,
    },
  },
});

const req = require.context('../lib/components/', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
