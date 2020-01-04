import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultConfig, verticalHeader } from './Table.mock';
import Table, { TableVanilla } from '.';
import { checkboxHeader } from '../InputChoice/InputChoice.mock';
import InputChoice from '../InputChoice';
import Button from '../../atoms/Button';
import { primaryButton } from '../../atoms/Button/Button.mock';

storiesOf('Molecules/Table', module)
  .addParameters({ jest: ['Table', 'TableVanilla'] })
  .add('Table Knobs', () => (
    <TableVanilla {...defaultConfig}>
      <TableVanilla.Head dataMappingKey="name" key="name">
        Dessert (100g serving)
      </TableVanilla.Head>
      <TableVanilla.Head dataMappingKey="calories" key="calories">
        Calories
      </TableVanilla.Head>
      <TableVanilla.Head dataMappingKey="fat" key="fat">
        Fat (g)
      </TableVanilla.Head>
      <TableVanilla.Head dataMappingKey="carbs" key="carbs">
        Carbs (g)
      </TableVanilla.Head>
      <TableVanilla.Head dataMappingKey="protein" key="protein">
        Protein (g)
      </TableVanilla.Head>
    </TableVanilla>
  ))
  .add('Table', () => (
    <Table {...defaultConfig}>
      <Table.Head dataMappingKey="name" key="name">
        Dessert (100g serving)
      </Table.Head>
      <Table.Head dataMappingKey="calories" key="calories">
        Calories
      </Table.Head>
      <Table.Head dataMappingKey="fat" key="fat">
        Fat (g)
      </Table.Head>
      <Table.Head dataMappingKey="carbs" key="carbs">
        Carbs (g)
      </Table.Head>
      <Table.Head dataMappingKey="protein" key="protein">
        Protein (g)
      </Table.Head>
    </Table>
  ))
  .add('Table vertical', () => (
    <Table {...defaultConfig} {...verticalHeader}>
      <Table.Head dataMappingKey="name" key="name">
        Dessert (100g serving)
      </Table.Head>
      <Table.Head dataMappingKey="calories" key="calories">
        Calories
      </Table.Head>
      <Table.Head dataMappingKey="fat" key="fat">
        Fat (g)
      </Table.Head>
      <Table.Head dataMappingKey="carbs" key="carbs">
        Carbs (g)
      </Table.Head>
      <Table.Head dataMappingKey="protein" key="protein">
        Protein (g)
      </Table.Head>
    </Table>
  ))
  .add('Table with input box', () => (
    <Table {...defaultConfig}>
      <Table.Head key="input" cellDataUsingComponent={() => <InputChoice {...checkboxHeader} />}>
        <InputChoice {...checkboxHeader} />
      </Table.Head>
      <Table.Head dataMappingKey="name" key="name">
        Dessert (100g serving)
      </Table.Head>
      <Table.Head dataMappingKey="calories" key="calories">
        Calories
      </Table.Head>
      <Table.Head dataMappingKey="fat" key="fat">
        Fat (g)
      </Table.Head>
      <Table.Head dataMappingKey="carbs" key="carbs">
        Carbs (g)
      </Table.Head>
      <Table.Head dataMappingKey="protein" key="protein">
        Protein (g)
      </Table.Head>
      <Table.Head
        key="button"
        cellDataUsingComponent={() => <Button {...primaryButton}>Action</Button>}
      >
        Submit
      </Table.Head>
    </Table>
  ));
