import React from 'react';
import { shallowWithTheme, renderWithTheme } from '../../../../../../__mock__/themeMock';
import { FieldTextareaVanilla } from '../FieldTextarea';

describe('FieldTextarea Component', () => {
  let FieldTextarea = '';

  test.only('should render correctly', () => {
    FieldTextarea = shallowWithTheme(<FieldTextareaVanilla />);
    expect(FieldTextarea).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    const props = {
      label: 'Comment',
    };
    FieldTextarea = renderWithTheme(<FieldTextareaVanilla {...props} />);
    expect(FieldTextarea.find('label').text()).toEqual(props.label);
  });

  test('should render textarea tag', () => {
    FieldTextarea = renderWithTheme(<FieldTextareaVanilla />);
    expect(FieldTextarea.find('textarea')).toHaveLength(1);
  });
});
