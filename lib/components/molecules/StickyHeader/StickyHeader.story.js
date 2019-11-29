import React from 'react';
import { storiesOf } from '@storybook/react';

import StickyHeader from './StickyHeader';
import './StickyHeader.css';

storiesOf('molecules', module)
  .addParameters({ jest: ['StickyHeader'] })
  .add('StickyHeader', () => {
    return (
      <div style={{ height: '800px' }}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
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
          <div className="topnav">
            <div className="topnav-right">
              <a href="#search">Search</a>
              <a href="#about">About</a>
            </div>
          </div>
        </StickyHeader>
      </div>
    );
  });
