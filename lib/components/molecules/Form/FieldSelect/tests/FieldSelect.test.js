import React from 'react';
import { shallowWithTheme, renderWithTheme } from '../../../../../../__mock__/themeMock';
import { FieldSelectVanilla } from '../FieldSelect';
import Form from '../../Form';
import { ButtonVanilla } from '../../../../atoms/Button';

describe('FieldInput Component', () => {
  let FieldInput = '';

  test('should render correctly', () => {
    FieldInput = shallowWithTheme(
      <Form>
        <div>
          <FieldSelectVanilla />
          <FieldSelectVanilla />
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
      label: 'Select Fav Color',
      options: ['red', 'black', 'blue'],
      name: 'color',
    };
    FieldInput = renderWithTheme(
      <Form>
        <div>
          <FieldSelectVanilla {...props} />
          <FieldSelectVanilla {...props} />
        </div>
        <ButtonVanilla primary type="submit">
          Submit
        </ButtonVanilla>
      </Form>
    );
    expect(FieldInput.find('label').text()).toEqual('Select Fav ColorSelect Fav Color');
  });

  test('should render select tag', () => {
    const props = {
      label: 'Select Fav Color',
      options: ['red', 'black', 'blue'],
      name: 'color',
    };
    FieldInput = renderWithTheme(
      <Form>
        <div>
          <FieldSelectVanilla {...props} />
          <FieldSelectVanilla {...props} />
        </div>
        <ButtonVanilla primary type="submit">
          Submit
        </ButtonVanilla>
      </Form>
    );
    expect(FieldInput.find('select')).toHaveLength(2);
  });
});
