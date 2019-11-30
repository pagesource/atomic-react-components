import React from 'react';
import { shallow } from 'enzyme';
import { FieldInputVanilla } from '../FieldInput';
import Label from '../../../../atoms/Label';

describe('FieldInput Component', () => {
  let FieldInput = '';

  test('should render correctly', () => {
    FieldInput = shallow(<FieldInputVanilla />);
    expect(FieldInput).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    const props = {
      label: 'Enter username',
    };
    FieldInput = shallow(<FieldInputVanilla {...props} />);
    expect(FieldInput).toMatchSnapshot();
    expect(FieldInput.find(Label).props().children).toEqual(props.label);
  });
});
