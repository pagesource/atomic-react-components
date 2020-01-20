// src/App.js
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Button } from '@storybook/react/demo';
const shortcodes = { Button }
export default ({ children }) => (
  <MDXProvider components={shortcodes}>
    {children}
  </MDXProvider>
)
