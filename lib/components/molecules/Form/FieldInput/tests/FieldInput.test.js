import React from 'react';

import { shallowWithTheme, mountWithTheme } from '../../../../../../__mock__/themeMock';
import Form from '../../Form';
import { FieldInputVanilla } from '../FieldInput';

describe('FieldInput Component', () => {
  let FieldInput = '';

  test('should render correctly', () => {
    FieldInput = shallowWithTheme(<FieldInputVanilla />);
    expect(FieldInput).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    const props = {
      label: 'Enter username',
      name: 'username',
      type: 'text',
      validationInstructions: 'Enter valid username',
    };
    FieldInput = mountWithTheme(
      <Form>
        <FieldInputVanilla {...props} />
      </Form>
    );
    console.log('TCL: FieldInput', FieldInput);

    expect(FieldInput.find('label').text()).toEqual('Enter username');
  });

  test('should render Input component with proper type', () => {
    const props = {
      name: 'email',
      type: 'email',
      id: 'email',
    };
    FieldInput = mountWithTheme(
      <Form>
        <FieldInputVanilla {...props} />
      </Form>
    );
    expect(FieldInput.find('input')).toHaveLength(1);
  });
});
