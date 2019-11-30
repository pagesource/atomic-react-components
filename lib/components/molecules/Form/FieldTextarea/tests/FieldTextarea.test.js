import React from 'react';
import { shallow } from 'enzyme';
import { FieldTextareaVanilla } from '../FieldTextarea';
import Label from '../../../../atoms/Label';

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
    FieldTextarea = shallow(<FieldTextareaVanilla {...props} />);
    expect(FieldTextarea).toMatchSnapshot();
    expect(FieldTextarea.find(Label).props().children).toEqual(props.label);
  });
});
