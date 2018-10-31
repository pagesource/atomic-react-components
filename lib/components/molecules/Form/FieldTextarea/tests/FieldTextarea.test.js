import React from 'react';
import { shallow, render } from 'enzyme';
import { FieldTextareaVanilla } from '../FieldTextarea';

describe('FieldTextarea Component', () => {
  let FieldTextarea = '';

  test('should render correctly', () => {
    FieldTextarea = shallow(<FieldTextareaVanilla />);
    expect(FieldTextarea).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    const props = {
      label: 'Comment',
    };
    FieldTextarea = render(<FieldTextareaVanilla {...props} />);
    expect(FieldTextarea.find('label').text()).toEqual(props.label);
  });

  test('should render textarea tag', () => {
    FieldTextarea = render(<FieldTextareaVanilla />);
    expect(FieldTextarea.find('textarea')).toHaveLength(1);
  });
});
