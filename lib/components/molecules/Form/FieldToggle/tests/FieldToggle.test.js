import React from 'react';
import { FieldToggleVanilla } from '../index';
import { userFormToggleProps } from '../../Form.mock';
import { shallowWithTheme, mountWithTheme } from '../../../../../../__mock__/themeMock';

describe('<FieldToggle />', () => {
  let FieldToggleComponent = '';

  test('should render correctly', () => {
    FieldToggleComponent = shallowWithTheme(<FieldToggleVanilla {...userFormToggleProps} />);
    expect(FieldToggleComponent).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    FieldToggleComponent = mountWithTheme(<FieldToggleVanilla {...userFormToggleProps} />);
    expect(FieldToggleComponent.find('label').length).toEqual(2);
  });

  test('should render label with Value correctly', () => {
    FieldToggleComponent = mountWithTheme(<FieldToggleVanilla {...userFormToggleProps} />);
    expect(FieldToggleComponent.find('.label-name').at(0).text()).toEqual(
      userFormToggleProps.label
    );
  });

  test('should render input correctly', () => {
    FieldToggleComponent = mountWithTheme(<FieldToggleVanilla {...userFormToggleProps} />);
    expect(FieldToggleComponent.find('input').length).toEqual(1);
  });

  test('should render disabled input', () => {
    FieldToggleComponent = mountWithTheme(<FieldToggleVanilla {...userFormToggleProps} disabled />);
    expect(FieldToggleComponent.find('input').prop('disabled')).toEqual(true);
  });

  test('should tigger click event with toggle Value', () => {
    const handleToggle = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation((toggle) => [toggle, handleToggle]);
    FieldToggleComponent = mountWithTheme(<FieldToggleVanilla {...userFormToggleProps} />);
    FieldToggleComponent.find('input[type="checkbox"]').simulate('click', {
      target: { clicked: true },
    });
    expect(handleToggle).toHaveBeenCalledWith(true);
  });

  test('should render Indicator On', () => {
    FieldToggleComponent = mountWithTheme(
      <FieldToggleVanilla {...userFormToggleProps} intialToggleState />
    );
    FieldToggleComponent.find('input[type="checkbox"]').simulate('click', { target: {} });
    expect(FieldToggleComponent.find('.toggle-label').text()).toEqual(
      userFormToggleProps.indicatorOn
    );
  });

  test('should tigger a handleToggleCallback function', () => {
    const handleToggleCallback = jest.fn();
    FieldToggleComponent = mountWithTheme(
      <FieldToggleVanilla {...userFormToggleProps} handleToggleCallback={handleToggleCallback} />
    );
    FieldToggleComponent.find('input[type="checkbox"]').simulate('click', {
      target: { clicked: true },
    });
    expect(handleToggleCallback).toHaveBeenCalled();
  });
});
