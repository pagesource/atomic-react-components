import React from 'react';
import { configure, setAddon, addDecorator } from "@storybook/react";
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';
import { withConsole } from '@storybook/addon-console';
import { ThemeProvider } from 'styled-components';
import Theme from '../lib/styles/theme';

setDefaults({
  sectionOptions: {
    showSource: false,
    allowSourceToggling: false,
    showPropTables: false,
    allowPropTablesToggling: false,
  }
});

addDecorator((storyFn, context) => {
  return <ThemeProvider theme={Theme}>{withConsole()(storyFn)(context)}</ThemeProvider>;
});

setAddon(chaptersAddon);

const req = require.context("../lib/components", true, /story\.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
