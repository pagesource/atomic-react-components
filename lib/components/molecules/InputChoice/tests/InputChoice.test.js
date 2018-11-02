import React from 'react';
import { shallow } from 'enzyme';
import { InputChoiceVanilla } from '../InputChoice';

describe('InputChoiceVanilla Component', () => {
  let inputControl = '';
  beforeEach(() => {
    inputControl = shallow(<InputChoiceVanilla type="radio" id="test_1" name="test_1" />);
  });

  test('should render Radio button correctly', () => {
    expect(inputControl).toMatchSnapshot();
  });

  test('should render checkbox correctly', () => {
    inputControl = shallow(<InputChoiceVanilla type="checkbox" id="test_2" name="test_2" />);
    expect(inputControl).toMatchSnapshot();
  });

  test('should render disabled', () => {
    inputControl = shallow(
      <InputChoiceVanilla type="checkbox" disabled id="test_3" name="test_3" />
    );
    expect(inputControl.find({ disabled: true })).toHaveLength(1);
  });

  test('should render checked', () => {
    inputControl = shallow(
      <InputChoiceVanilla type="checkbox" checked id="test_4" name="test_4" />
    );
    expect(inputControl.find({ defaultChecked: true })).toHaveLength(1);
  });
});
