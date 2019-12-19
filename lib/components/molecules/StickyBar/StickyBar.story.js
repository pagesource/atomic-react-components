import React from 'react';
import { storiesOf } from '@storybook/react';
import defaultConfig from './StickyBar.mock';

// Import Styled Component to showcase variations
import StickyBar, { StickyBarVanilla } from '.';
import Button from '../../atoms/Button';
import Anchor from '../../atoms/Anchor';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
storiesOf('Molecules/StickyBar', module)
  .addParameters({ jest: ['StickyBar', 'StickyBarVanilla'] })
  .add('Knobs', () => (
    <StickyBarVanilla {...defaultConfig} className={defaultConfig.className}>
      <StickyBar.Item>List Element 1</StickyBar.Item>
      <StickyBar.Item>List Element 2</StickyBar.Item>
      <StickyBar.Item>Some Data.....</StickyBar.Item>
    </StickyBarVanilla>
  ))
  .add('StickyBar', () => (
    <>
      <StickyBar {...defaultConfig.variation1}>
        <StickyBar.Item>
          <Anchor>Link 1</Anchor>
        </StickyBar.Item>
        <StickyBar.Item>
          <Anchor>Link 2</Anchor>
        </StickyBar.Item>
        <StickyBar.Item>
          <Anchor>Some Other Link</Anchor>
        </StickyBar.Item>
      </StickyBar>
      <StickyBar {...defaultConfig.variation2}>
        <StickyBar.Item>
          <Button>LinkedIn</Button>
        </StickyBar.Item>
        <StickyBar.Item>
          <Button>Twitter</Button>
        </StickyBar.Item>
        <StickyBar.Item>
          <Button>Facebook</Button>
        </StickyBar.Item>
      </StickyBar>
    </>
  ));
