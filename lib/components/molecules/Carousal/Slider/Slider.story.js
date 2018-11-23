import React from 'react';
import { storiesOf } from '@storybook/react';

// Import Styled Component to showcase variations
import Slider, { SliderVanilla } from '.';
import Image from '../../../atoms/Image';

storiesOf('Molecules/Carousal', module).addWithChapters('Slider', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <SliderVanilla className="hide-default-sample" />,
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
      title: 'Primary Slider Variations',
      sections: [
        {
          title: 'Primary Slider',
          sectionFn: () => (
            <Slider>
              <Image src="https://via.placeholder.com/480.png/FF0000/fff" />
              <Image src="https://via.placeholder.com/480.png/454545/fff" />
              <Image src="https://via.placeholder.com/480.png/0000FF/fff" />
            </Slider>
          ),
        },
      ],
    },
  ],
});
