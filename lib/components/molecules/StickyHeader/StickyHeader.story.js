import React from 'react';
import { storiesOf } from '@storybook/react';

import StickyHeader from './StickyHeader';

storiesOf('molecules/StickyHeader', module)
  .addParameters({ jest: ['StickyHeader'] })
  .add('StickyHeader', () => {
    return (
      <div style={{ height: '1200px', 'overflow-y': 'scroll' }}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys
        </p>
        <StickyHeader>
          <ul>
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </StickyHeader>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys
        </p>
      </div>
    );
  });
