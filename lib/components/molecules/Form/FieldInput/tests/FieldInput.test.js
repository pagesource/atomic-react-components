import React from 'react';

import { shallowWithTheme, renderWithTheme } from '../../../../../../__mock__/themeMock';
import Form from '../../Form';
import { FieldInputVanilla } from '../FieldInput';
import { ButtonVanilla } from '../../../../atoms/Button';

describe('FieldInput Component', () => {
  let FieldInput = '';

  test('should render correctly', () => {
    const props = {
      label: 'Enter username',
      name: 'username',
      type: 'text',
      validationInstructions: 'Enter valid username',
    };
    FieldInput = shallowWithTheme(
      <Form>
        <div>
          <FieldInputVanilla {...props} />
          <FieldInputVanilla {...props} />
        </div>
        <ButtonVanilla primary type="submit">
          Submit
        </ButtonVanilla>
      </Form>
    );
    expect(FieldInput).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    const props = {
      label: 'Enter username',
      name: 'username',
      type: 'text',
      validationInstructions: 'Enter valid username',
    };
    FieldInput = renderWithTheme(
      <Form>
        <div>
          <FieldInputVanilla {...props} />
          <FieldInputVanilla {...props} />
        </div>
        <ButtonVanilla primary type="submit">
          Submit
        </ButtonVanilla>
      </Form>
    );
    console.log('TCL: FieldInput', FieldInput);

    expect(FieldInput.find('label').text()).toEqual('Enter usernameEnter username');
  });

  test('should render Input component with proper type', () => {
    const props = {
      name: 'email',
      type: 'email',
      id: 'email',
    };
    FieldInput = renderWithTheme(
      <Form>
        <div>
          <FieldInputVanilla {...props} />
          <FieldInputVanilla {...props} />
        </div>
        <ButtonVanilla primary type="submit">
          Submit
        </ButtonVanilla>
      </Form>
    );
    expect(FieldInput.find('input')).toHaveLength(2);
  });
});
