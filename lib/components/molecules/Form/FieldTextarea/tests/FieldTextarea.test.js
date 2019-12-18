import React from 'react';
import { shallowWithTheme, mountWithTheme } from '../../../../../../__mock__/themeMock';
import { FieldTextareaVanilla } from '../FieldTextarea';
import Form from '../../Form';

describe('FieldTextarea Component', () => {
  let FieldTextarea = '';

  test('should render correctly', () => {
    FieldTextarea = shallowWithTheme(<FieldTextareaVanilla />);
    expect(FieldTextarea).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    const props = {
      label: 'Comment',
      name: 'comment',
    };
    FieldTextarea = mountWithTheme(
      <Form>
        <FieldTextareaVanilla {...props} />
      </Form>
    );
    expect(FieldTextarea.find('label').text()).toEqual(props.label);
  });

  test('should render textarea tag', () => {
    const props = {
      label: 'Comment',
      name: 'comment',
    };
    FieldTextarea = mountWithTheme(
      <Form>
        <FieldTextareaVanilla {...props} />
      </Form>
    );
    expect(FieldTextarea.find('textarea')).toHaveLength(1);
  });
});
