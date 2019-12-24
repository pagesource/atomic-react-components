import React from 'react';
import { storiesOf } from '@storybook/react';

import StickyHeader from './StickyHeader';
import defaultConfig from './StickyHeader.mock';

storiesOf('molecules', module)
  .addParameters({ jest: ['StickyHeader'] })
  .add('StickyHeader', () => {
    return (
      <div style={{ height: '800px' }}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys
        </p>
        <StickyHeader>
          <h1 style={{ ...defaultConfig }}>Sticky Header</h1>
        </StickyHeader>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys
        </p>
        <StickyHeader>
          <h1 style={{ ...defaultConfig }}>Sticky Header</h1>
        </StickyHeader>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys
        </p>
      </div>
    );
  });
