import React from 'react';
import { shallow } from 'enzyme';
import { InputControlVanilla } from '../InputControl';

describe('InputControl Component', () => {
  let inputControl = '';
  beforeEach(() => {
    inputControl = shallow(<InputControlVanilla type="radio" />);
  });

  test('should render Radio button correctly', () => {
    expect(inputControl).toMatchSnapshot();
  });

  test('should render checkbox correctly', () => {
    inputControl = shallow(<InputControlVanilla type="checkbox" />);
    expect(inputControl).toMatchSnapshot();
  });

  test('should render disabled', () => {
    inputControl = shallow(<InputControlVanilla type="checkbox" disabled />);
    expect(inputControl.find({ disabled: true })).toHaveLength(2);
  });

  test('should render checked', () => {
    inputControl = shallow(<InputControlVanilla type="checkbox" checked />);
    expect(inputControl.find({ defaultChecked: true })).toHaveLength(1);
  });
});
