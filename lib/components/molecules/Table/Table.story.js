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
      <Table.Column dataMappingKey="name" render={{ content: 'Dessert (100g serving)' }} />
      <Table.Column dataMappingKey="calories" render={{ content: 'Calories' }} />
      <Table.Column dataMappingKey="fat" render={{ content: 'Fat (g)' }} />
      <Table.Column dataMappingKey="carbs" render={{ content: 'Carbs (g)' }} />
      <Table.Column dataMappingKey="protein" render={{ content: 'Protein (g)' }} />
    </TableVanilla>
  ))
  .add('Table', () => (
    <Table {...defaultConfig}>
      <Table.Column dataMappingKey="name" render={{ content: 'Dessert (100g serving)' }} />
      <Table.Column dataMappingKey="calories" render={{ content: 'Calories' }} />
      <Table.Column dataMappingKey="fat" render={{ content: 'Fat (g)' }} />
      <Table.Column dataMappingKey="carbs" render={{ content: 'Carbs (g)' }} />
      <Table.Column dataMappingKey="protein" render={{ content: 'Protein (g)' }} />
    </Table>
  ))
  .add('Table Vertical', () => (
    <Table {...defaultConfig} {...verticalHeader}>
      <Table.Column dataMappingKey="name" render={{ content: 'Dessert (100g serving)' }} />
      <Table.Column dataMappingKey="calories" render={{ content: 'Calories' }} />
      <Table.Column dataMappingKey="fat" render={{ content: 'Fat (g)' }} />
      <Table.Column dataMappingKey="carbs" render={{ content: 'Carbs (g)' }} />
      <Table.Column dataMappingKey="protein" render={{ content: 'Protein (g)' }} />
    </Table>
  ))
  .add('Table with input box', () => (
    <Table {...defaultConfig}>
      <Table.Column
        render={{
          showInHeader: true,
          showInCell: true,
          method: () => <InputChoice {...checkboxHeader} />,
        }}
      />
      <Table.Column dataMappingKey="name" render={{ content: 'Dessert (100g serving)' }} />
      <Table.Column dataMappingKey="calories" render={{ content: 'Calories' }} />
      <Table.Column dataMappingKey="fat" render={{ content: 'Fat (g)' }} />
      <Table.Column dataMappingKey="carbs" render={{ content: 'Carbs (g)' }} />
      <Table.Column dataMappingKey="protein" render={{ content: 'Protein (g)' }} />
      <Table.Column
        render={{
          content: 'Action',
          showInHeader: false,
          showInCell: true,
          method: () => <Button {...primaryButton}>Submit</Button>,
        }}
      />
    </Table>
  ));
