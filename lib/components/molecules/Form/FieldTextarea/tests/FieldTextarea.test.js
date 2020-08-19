import React from 'react';
import { shallowWithTheme, renderWithTheme } from '../../../../../../__mock__/themeMock';
import { FieldTextareaVanilla } from '../FieldTextarea';
import Form from '../../Form';
import { ButtonVanilla } from '../../../../atoms/Button';

describe('FieldTextarea Component', () => {
  let FieldTextarea = '';

  test('should render correctly', () => {
    FieldTextarea = shallowWithTheme(
      <Form>
        <div>
          <FieldTextareaVanilla />
          <FieldTextareaVanilla />
        </div>
        <ButtonVanilla primary type="submit">
          Submit
        </ButtonVanilla>
      </Form>
    );
    expect(FieldTextarea).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    const props = {
      label: 'Comment',
      name: 'comment',
    };
    FieldTextarea = renderWithTheme(
      <Form>
        <div>
          <FieldTextareaVanilla {...props} />
          <FieldTextareaVanilla {...props} />
        </div>
        <ButtonVanilla primary type="submit">
          Submit
        </ButtonVanilla>
      </Form>
    );
    expect(FieldTextarea.find('label').text()).toEqual('CommentComment');
  });

  test('should render textarea tag', () => {
    const props = {
      label: 'Comment',
      name: 'comment',
    };
    FieldTextarea = renderWithTheme(
      <Form>
        <div>
          <FieldTextareaVanilla {...props} />
          <FieldTextareaVanilla {...props} />
        </div>
        <ButtonVanilla primary type="submit">
          Submit
        </ButtonVanilla>
      </Form>
    );
    expect(FieldTextarea.find('textarea')).toHaveLength(2);
  });
});
