import React from 'react';
import { storiesOf } from '@storybook/react';
import defaultConfig from './RenderTable.mock';
import RenderTable, { RenderTableVanilla } from '.';

storiesOf('Molecules', module)
  .addParameters({ jest: ['RenderTable', 'RenderTableVanilla'] })

  .add('Table Knobs', () => (
    <RenderTableVanilla {...defaultConfig}>
      <RenderTableVanilla.Column label="Dessert (100g serving)" name="name" />
      <RenderTableVanilla.Column label="Calories" name="calories" />
      <RenderTableVanilla.Column label="Fat (g)" name="fat" />
      <RenderTableVanilla.Column label="Carbs (g)" name="carbs" />
      <RenderTableVanilla.Column label="Protein (g)" name="protein" />
    </RenderTableVanilla>
  ))
  .add('Table', () => (
    <RenderTable {...defaultConfig}>
      <RenderTable.Column label="Dessert (100g serving)" name="name" />
      <RenderTable.Column label="Calories" name="calories" />
      <RenderTable.Column label="Fat (g)" name="fat" />
      <RenderTable.Column label="Carbs (g)" name="carbs" />
      <RenderTable.Column label="Protein (g)" name="protein" />
    </RenderTable>
  ));
