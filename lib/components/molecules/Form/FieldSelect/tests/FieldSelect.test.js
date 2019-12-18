import React from 'react';
import {
  shallowWithTheme,
  mountWithTheme,
  renderWithTheme,
} from '../../../../../../__mock__/themeMock';
import { FieldSelectVanilla } from '../FieldSelect';
import Form from '../../Form';

describe('FieldInput Component', () => {
  let FieldInput = '';

  test('should render correctly', () => {
    FieldInput = shallowWithTheme(
      <Form>
        <FieldSelectVanilla />
      </Form>
    );
    expect(FieldInput).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    const props = {
      label: 'Select Fav Color',
      options: ['red', 'black', 'blue'],
      name: 'color',
    };
    FieldInput = renderWithTheme(
      <Form>
        <FieldSelectVanilla {...props} />
      </Form>
    );
    expect(FieldInput.find('label').text()).toEqual('Select Fav Color');
  });

  test('should render select tag', () => {
    const props = {
      label: 'Select Fav Color',
      options: ['red', 'black', 'blue'],
      name: 'color',
    };
    FieldInput = mountWithTheme(
      <Form>
        <FieldSelectVanilla {...props} />
      </Form>
    );
    expect(FieldInput.find('select')).toHaveLength(1);
  });
});
