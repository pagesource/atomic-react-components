import React from 'react';
import { storiesOf } from '@storybook/react';
import defaultConfig from './RenderTable.mock';
import RenderTable, { RenderTableVanilla } from '.';

const Column = ({ intent, label, value }) =>
  intent === 'header' ? <span>{label}</span> : <span>{value}</span>;

storiesOf('Molecules', module)
  .addParameters({ jest: ['RenderTable', 'RenderTableVanilla'] })

  .add('Table Knobs', () => (
    <RenderTableVanilla {...defaultConfig}>
      <Column label="Dessert (100g serving)" name="name" />
      <Column label="Calories" name="calories" />
      <Column label="Fat (g)" name="fat" />
      <Column label="Carbs (g)" name="carbs" />
      <Column label="Protein (g)" name="protein" />
    </RenderTableVanilla>
  ))
  .add('Table', () => (
    <RenderTable {...defaultConfig}>
      <Column label="Dessert (100g serving)" name="name" />
      <Column label="Calories" name="calories" />
      <Column label="Fat (g)" name="fat" />
      <Column label="Carbs (g)" name="carbs" />
      <Column label="Protein (g)" name="protein" />
    </RenderTable>
  ));
