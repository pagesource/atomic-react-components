import React from 'react';
import { shallow } from 'enzyme';

import { FieldToggleVanilla } from '../index';
// import { defaultCheckbox } from '../FieldToggle.mock';
import { userFormToggleProps } from '../../Form.mock';
// import { mountWithTheme } from '../../../../../../__mock__/themeMock';

describe('<FieldToggle />', () => {
  let FieldToggleComponent = '';
  beforeEach(() => {
    FieldToggleComponent = shallow(<FieldToggleVanilla {...userFormToggleProps} />);
  });

  test.only('should render correctly', () => {
    expect(FieldToggleComponent).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    expect(FieldToggleComponent.find('Label').length).toEqual(1);
  });

  test('should render label with Value correctly', () => {
    expect(
      FieldToggleComponent.find('.labelName')
        .dive()
        .text()
    ).toEqual(userFormToggleProps.labelName);
  });

  test('should render input correctly', () => {
    expect(FieldToggleComponent.find('Input').length).toEqual(0);
  });

  test('should render disabled input', () => {
    FieldToggleComponent = shallow(<FieldToggleVanilla disabled />);
    expect(FieldToggleComponent.find({ disabled: true })).toHaveLength(0);
  });
});
