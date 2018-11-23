import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig, { carousalWithDots, carousalWithDefaultSlideIndex } from './Carousal.mock';

// Import Styled Component to showcase variations
import Carousal, { CarousalVanilla } from '.';
import Image from '../../atoms/Image';

storiesOf('Molecules/Carousal', module).addWithChapters('Carousal', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <CarousalVanilla
              {...defaultConfig}
              className={`hide-default-sample ${defaultConfig.className}`}
            />
          ),
          options: {
            showSource: true,
            allowSourceToggling: true,
            showPropTables: true,
            allowPropTablesToggling: true,
          },
        },
      ],
    },
    {
      title: 'Primary Carousal Variations',
      sections: [
        {
          title: 'Carousal',
          sectionFn: () => (
            <div style={{ width: '480px', margin: '0 auto' }}>
              <Carousal {...defaultConfig}>
                <Image src="https://via.placeholder.com/480.png/FF0000/fff" />
                <Image src="https://via.placeholder.com/480.png/454545/fff" />
                <Image src="https://via.placeholder.com/480.png/0000FF/fff" />
                <Image src="https://via.placeholder.com/480.png/999999/fff" />
                <Image src="https://via.placeholder.com/480.png/00FF00/fff" />
              </Carousal>
            </div>
          ),
        },
        {
          title: 'Carousal with Dots',
          sectionFn: () => (
            <div style={{ width: '480px', margin: '0 auto' }}>
              <Carousal {...carousalWithDots}>
                <Image src="https://via.placeholder.com/480.png/FF0000/fff" />
                <Image src="https://via.placeholder.com/480.png/454545/fff" />
                <Image src="https://via.placeholder.com/480.png/0000FF/fff" />
                <Image src="https://via.placeholder.com/480.png/999999/fff" />
                <Image src="https://via.placeholder.com/480.png/00FF00/fff" />
              </Carousal>
            </div>
          ),
        },
        {
          title: 'Carousal with defaultSlideIndex',
          sectionFn: () => (
            <div style={{ width: '480px', margin: '0 auto' }}>
              <Carousal {...carousalWithDefaultSlideIndex}>
                <Image src="https://via.placeholder.com/480.png/FF0000/fff" />
                <Image src="https://via.placeholder.com/480.png/454545/fff" />
                <Image src="https://via.placeholder.com/480.png/0000FF/fff" />
                <Image src="https://via.placeholder.com/480.png/999999/fff" />
                <Image src="https://via.placeholder.com/480.png/00FF00/fff" />
              </Carousal>
            </div>
          ),
        },
        {
          title: 'Carousal with Single Slide',
          sectionFn: () => (
            <div style={{ width: '480px', margin: '0 auto' }}>
              <Carousal {...defaultConfig}>
                <Image src="https://via.placeholder.com/480.png/FF0000/fff" />
              </Carousal>
            </div>
          ),
        },
        {
          title: 'Carousal with slides of mixed content',
          sectionFn: () => (
            <div style={{ width: '480px', margin: '0 auto' }}>
              <Carousal {...defaultConfig}>
                <Image src="https://via.placeholder.com/480.png/FF0000/fff" />
                <p>This is slide two</p>
                <p>This is slide three</p>
              </Carousal>
            </div>
          ),
        },
      ],
    },
  ],
});
