import React from 'react';
import { storiesOf } from '@storybook/react';
import defaultConfig from './ProgressIndicator.mock';
import ProgressIndicator, { ProgressIndicatorVanilla } from '.';

storiesOf('Molecules/ProgressIndicator', module)
  .addParameters({ jest: ['ProgressIndicator', 'ProgressIndicatorVanilla'] })
  .add('ProgressIndicator', () => (
    <ProgressIndicator {...defaultConfig}>
      <ProgressIndicator.Step> Label1 </ProgressIndicator.Step>
      <ProgressIndicator.Step> Label2 </ProgressIndicator.Step>
      <ProgressIndicator.Step> Label3 </ProgressIndicator.Step>
      {/* <ProgressIndicator.Step> Label4 </ProgressIndicator.Step>
      <ProgressIndicator.Step> Label5 </ProgressIndicator.Step>
      <ProgressIndicator.Step> Label6 </ProgressIndicator.Step> */}
    </ProgressIndicator>
  ))
  .add('ProgressIndicatorVanilla', () => <ProgressIndicatorVanilla {...defaultConfig} />);
