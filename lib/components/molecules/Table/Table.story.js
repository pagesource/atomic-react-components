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
      <TableVanilla.Cells dataMappingKey="name" render={{ content: 'Dessert (100g serving)' }} />
      <TableVanilla.Cells dataMappingKey="calories" render={{ content: 'Calories' }} />
      <TableVanilla.Cells dataMappingKey="fat" render={{ content: 'Fat (g)' }} />
      <TableVanilla.Cells dataMappingKey="carbs" render={{ content: 'Carbs (g)' }} />
      <TableVanilla.Cells dataMappingKey="protein" render={{ content: 'Protein (g)' }} />
    </TableVanilla>
  ))
  .add('Table', () => (
    <Table {...defaultConfig}>
      <Table.Cells dataMappingKey="name" render={{ content: 'Dessert (100g serving)' }} />
      <Table.Cells dataMappingKey="calories" render={{ content: 'Calories' }} />
      <Table.Cells dataMappingKey="fat" render={{ content: 'Fat (g)' }} />
      <Table.Cells dataMappingKey="carbs" render={{ content: 'Carbs (g)' }} />
      <Table.Cells dataMappingKey="protein" render={{ content: 'Protein (g)' }} />
    </Table>
  ))
  .add('Table Vertical', () => (
    <Table {...defaultConfig} {...verticalHeader}>
      <Table.Cells dataMappingKey="name" render={{ content: 'Dessert (100g serving)' }} />
      <Table.Cells dataMappingKey="calories" render={{ content: 'Calories' }} />
      <Table.Cells dataMappingKey="fat" render={{ content: 'Fat (g)' }} />
      <Table.Cells dataMappingKey="carbs" render={{ content: 'Carbs (g)' }} />
      <Table.Cells dataMappingKey="protein" render={{ content: 'Protein (g)' }} />
    </Table>
  ))
  .add('Table with input box', () => (
    <Table {...defaultConfig}>
      <Table.Cells
        render={{
          showComponentInHeader: true,
          showComponentInCell: true,
          method: () => <InputChoice {...checkboxHeader} />,
        }}
      />
      <Table.Cells dataMappingKey="name" render={{ content: 'Dessert (100g serving)' }} />
      <Table.Cells dataMappingKey="calories" render={{ content: 'Calories' }} />
      <Table.Cells dataMappingKey="fat" render={{ content: 'Fat (g)' }} />
      <Table.Cells dataMappingKey="carbs" render={{ content: 'Carbs (g)' }} />
      <Table.Cells dataMappingKey="protein" render={{ content: 'Protein (g)' }} />
      <Table.Cells
        render={{
          content: 'Action',
          showComponentInHeader: false,
          showComponentInCell: true,
          method: () => <Button {...primaryButton}>Submit</Button>,
        }}
      />
    </Table>
  ));
