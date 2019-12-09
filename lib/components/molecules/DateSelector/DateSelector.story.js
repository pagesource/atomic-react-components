import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import {
  dateSelectorDefaultProps,
  mmddyyFormatProps,
  monthYearOnlyProps,
  startDateProps,
  endDateProps,
  startAndEndDateProps,
} from './DateSelector.mock';

// Import Styled Component to showcase variations
import DateSelector, { DateSelectorVanilla } from '.';

storiesOf('Molecules/DateSelector', module)
  .addParameters({ jest: ['DateSelector', 'DateSelectorVanilla'] })
  .add('Knobs', () => <DateSelectorVanilla {...dateSelectorDefaultProps} />)
  .add('DateSelector format ddmmyyyy', () => <DateSelector {...dateSelectorDefaultProps} />)
  .add('DateSelector format mmddyyyy', () => <DateSelector {...mmddyyFormatProps} />)
  .add('DateSelector format mmyyyy', () => <DateSelector {...monthYearOnlyProps} />)
  .add('DateSelector with Start Date', () => <DateSelector {...startDateProps} />)
  .add('DateSelector with End Date', () => <DateSelector {...endDateProps} />)
  .add('DateSelector with Start and End Date', () => <DateSelector {...startAndEndDateProps} />);
