import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultConfig, verticalHeader } from './Table.mock';
import Table, { TableVanilla } from '.';
import { checkboxHeader } from '../InputChoice/InputChoice.mock';
import InputChoice from '../InputChoice';
import Button from '../../atoms/Button';
import { primaryButton } from '../../atoms/Button/Button.mock';

storiesOf('Molecules', module)
  .addParameters({ jest: ['Table', 'TableVanilla'] })
  .add('Table Knobs', () => (
    <TableVanilla {...defaultConfig}>
      <TableVanilla.Thead dataMappingKey="name">Dessert (100g serving)</TableVanilla.Thead>
      <TableVanilla.Thead dataMappingKey="calories">Calories</TableVanilla.Thead>
      <TableVanilla.Thead dataMappingKey="fat">Fat (g</TableVanilla.Thead>
      <TableVanilla.Thead dataMappingKey="carbs">Carbs (g)</TableVanilla.Thead>
      <TableVanilla.Thead dataMappingKey="protein">Protein (g)</TableVanilla.Thead>
    </TableVanilla>
  ))
  .add('Table', () => (
    <Table {...defaultConfig}>
      <Table.Thead dataMappingKey="name">Dessert (100g serving)</Table.Thead>
      <Table.Thead dataMappingKey="calories">Calories</Table.Thead>
      <Table.Thead dataMappingKey="fat">Fat (g</Table.Thead>
      <Table.Thead dataMappingKey="carbs">Carbs (g)</Table.Thead>
      <Table.Thead dataMappingKey="protein">Protein (g)</Table.Thead>
    </Table>
  ))
  .add('Table vertical', () => (
    <Table {...defaultConfig} {...verticalHeader}>
      <Table.Thead dataMappingKey="name">Dessert (100g serving)</Table.Thead>
      <Table.Thead dataMappingKey="calories">Calories</Table.Thead>
      <Table.Thead dataMappingKey="fat">Fat (g</Table.Thead>
      <Table.Thead dataMappingKey="carbs">Carbs (g)</Table.Thead>
      <Table.Thead dataMappingKey="protein">Protein (g)</Table.Thead>
    </Table>
  ))
  .add('Table with input box', () => (
    <Table {...defaultConfig}>
      <Table.Thead dataMappingKey={() => <InputChoice {...checkboxHeader} />}>
        <InputChoice {...checkboxHeader} />
      </Table.Thead>
      <Table.Thead dataMappingKey="name">Dessert (100g serving)</Table.Thead>
      <Table.Thead dataMappingKey="calories">Calories</Table.Thead>
      <Table.Thead dataMappingKey="fat">Fat (g</Table.Thead>
      <Table.Thead dataMappingKey="carbs">Carbs (g)</Table.Thead>
      <Table.Thead dataMappingKey="protein">Protein (g)</Table.Thead>
      <Table.Thead dataMappingKey={() => <Button {...primaryButton}>Actiom</Button>}>
        Submit
      </Table.Thead>
    </Table>
  ));
