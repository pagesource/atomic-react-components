import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  accordionType1,
  accordionType2,
} from './AccordionBasic.mock';

// Import Styled Component to showcase variations
import AccordionBasic from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module).addParameters({
    jest: ['AccordionBasic']
  })
  .add('AccordionBasic', () => (
    <AccordionBasic {...accordionType1}/>, <
    AccordionBasic { ...accordionType2 }
    />
  ))
  .add('AccordionBasic', () =>
    <AccordionBasic {...accordionType2} />);
