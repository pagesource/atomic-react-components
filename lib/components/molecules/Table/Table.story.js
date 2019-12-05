import React from 'react';
import { storiesOf } from '@storybook/react';
import defaultConfig from './Table.mock';
import Table, { TableVanilla } from '.';

storiesOf('Molecules', module)
  .addParameters({ jest: ['Table', 'TableVanilla'] })

  .add('Table Knobs', () => (
    <TableVanilla {...defaultConfig}>
      <TableVanilla.Column label="Dessert (100g serving)" name="name" />
      <TableVanilla.Column label="Calories" name="calories" />
      <TableVanilla.Column label="Fat (g)" name="fat" />
      <TableVanilla.Column label="Carbs (g)" name="carbs" />
      <TableVanilla.Column label="Protein (g)" name="protein" />
    </TableVanilla>
  ))
  .add('Table', () => (
    <Table {...defaultConfig}>
      <Table.Column label="Dessert (100g serving)" name="name" />
      <Table.Column label="Calories" name="calories" />
      <Table.Column label="Fat (g)" name="fat" />
      <Table.Column label="Carbs (g)" name="carbs" />
      <Table.Column label="Protein (g)" name="protein" />
    </Table>
  ));
