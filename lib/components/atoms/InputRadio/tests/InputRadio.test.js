import React from 'react';
import { shallow } from 'enzyme';
import { InputRadioVanilla } from '../InputRadio';

describe('InputRadio Component', () => {
  let inputRadio = '';
  beforeEach(() => {
    inputRadio = shallow(<InputRadioVanilla name="test" id="name">inputRadio</InputRadioVanilla>);
  });

  test('should render correctly', () => {
    expect(inputRadio).toMatchSnapshot();
  });

  test('should render disabled', () => {
    inputRadio = shallow(<InputRadioVanilla name="test" id="name" disabled>InputRadio</InputRadioVanilla>);
    expect(inputRadio.find({ disabled: true })).toHaveLength(1);
  });

  test('should render checked', () => {
    inputRadio = shallow(<InputRadioVanilla name="test" id="name" checked>InputRadio</InputRadioVanilla>);
    expect(inputRadio.find({ checked: true })).toHaveLength(1);
  });

  test('should render label as children if label prop is passed', () => {
    inputRadio = shallow(<InputRadioVanilla name="test" id="name" label="inputRadio label" />);
    expect(inputRadio.find('span').text()).toEqual('inputRadio label');
  });
});
