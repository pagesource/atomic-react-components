import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './RenderTable.mock';

// Import Styled Component to showcase variations
import RenderTable, { RenderTableVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
const Column = ({ intent, label, value }) =>
  intent === 'header' ? <span>{label}</span> : <span>{value}</span>;
storiesOf('Molecules', module)
  .addParameters({ jest: ['RenderTable', 'RenderTableVanilla'] })

  .add('CTA Knobs', () => (
    <RenderTableVanilla {...defaultConfig}>
      <Column label="Dessert (100g serving)" name="name" />
      <Column label="Calories" name="calories" />
      <Column label="Fat (g)" name="fat" />
      <Column label="Carbs (g)" name="carbs" />
      <Column label="Protein (g)" name="protein" />
    </RenderTableVanilla>
  ))
  .add('CTA', () => (
    <RenderTable {...defaultConfig}>
      <Column label="Dessert (100g serving)" name="name" />
      <Column label="Calories" name="calories" />
      <Column label="Fat (g)" name="fat" />
      <Column label="Carbs (g)" name="carbs" />
      <Column label="Protein (g)" name="protein" />
    </RenderTable>
  ));
