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
      <TableVanilla.Head dataMappingKey="name">Dessert (100g serving)</TableVanilla.Head>
      <TableVanilla.Head dataMappingKey="calories">Calories</TableVanilla.Head>
      <TableVanilla.Head dataMappingKey="fat">Fat (g</TableVanilla.Head>
      <TableVanilla.Head dataMappingKey="carbs">Carbs (g)</TableVanilla.Head>
      <TableVanilla.Head dataMappingKey="protein">Protein (g)</TableVanilla.Head>
    </TableVanilla>
  ))
  .add('Table', () => (
    <Table {...defaultConfig}>
      <Table.Head dataMappingKey="name">Dessert (100g serving)</Table.Head>
      <Table.Head dataMappingKey="calories">Calories</Table.Head>
      <Table.Head dataMappingKey="fat">Fat (g</Table.Head>
      <Table.Head dataMappingKey="carbs">Carbs (g)</Table.Head>
      <Table.Head dataMappingKey="protein">Protein (g)</Table.Head>
    </Table>
  ))
  .add('Table vertical', () => (
    <Table {...defaultConfig} {...verticalHeader}>
      <Table.Head dataMappingKey="name">Dessert (100g serving)</Table.Head>
      <Table.Head dataMappingKey="calories">Calories</Table.Head>
      <Table.Head dataMappingKey="fat">Fat (g</Table.Head>
      <Table.Head dataMappingKey="carbs">Carbs (g)</Table.Head>
      <Table.Head dataMappingKey="protein">Protein (g)</Table.Head>
    </Table>
  ))
  .add('Table with input box', () => (
    <Table {...defaultConfig}>
      <Table.Head cellDataUsingComponent={() => <InputChoice {...checkboxHeader} />}>
        <InputChoice {...checkboxHeader} />
      </Table.Head>
      <Table.Head dataMappingKey="name">Dessert (100g serving)</Table.Head>
      <Table.Head dataMappingKey="calories">Calories</Table.Head>
      <Table.Head dataMappingKey="fat">Fat (g</Table.Head>
      <Table.Head dataMappingKey="carbs">Carbs (g)</Table.Head>
      <Table.Head dataMappingKey="protein">Protein (g)</Table.Head>
      <Table.Head cellDataUsingComponent={() => <Button {...primaryButton}>Action</Button>}>
        Submit
      </Table.Head>
    </Table>
  ));
