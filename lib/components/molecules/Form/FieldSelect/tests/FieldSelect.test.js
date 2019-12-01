import React from 'react';
import { shallow } from 'enzyme';
import { FieldSelectVanilla } from '../FieldSelect';
import Label from '../../../../atoms/Label';

describe('FieldInput Component', () => {
  let FieldInput = '';

  test('should render correctly', () => {
    FieldInput = shallow(<FieldSelectVanilla />);
    expect(FieldInput).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    const props = {
      label: 'Select Fav Color',
      options: ['red', 'black', 'blue'],
    };
    FieldInput = shallow(<FieldSelectVanilla {...props} />);
    expect(FieldInput).toMatchSnapshot();
    expect(FieldInput.find(Label).props().children).toEqual(props.label);
  });
});
