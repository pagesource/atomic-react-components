import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  accordionType1,
  accordionType2,
  accordionType3,
} from './AccordionBasic.mock';
import { unorderedList } from '../List/List.mock';
import List from '../List';

// Import Styled Component to showcase variations
import AccordionBasic from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module).addParameters({
    jest: ['AccordionBasic', 'List']
  })
  .add('AccordionBasic', () => (
    <List {...unorderedList}>
    	<AccordionBasic { ...accordionType1} className={`${accordionType1.className}`}/>
    	<AccordionBasic { ...accordionType2} className={`${accordionType2.className}`}/>
    	<AccordionBasic { ...accordionType3} className={`${accordionType3.className}`}/>
	</List>
  ));
