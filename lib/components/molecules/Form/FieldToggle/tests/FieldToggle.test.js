import React from 'react';
import { FieldToggleVanilla } from '../index';
import { userFormToggleProps } from '../../Form.mock';
import Form from '../../Form';
import { shallowWithTheme, mountWithTheme } from '../../../../../../__mock__/themeMock';

describe('<FieldToggle />', () => {
  let FieldToggleComponent = '';

  beforeEach(() => {
    FieldToggleComponent = shallowWithTheme(<FieldToggleVanilla {...userFormToggleProps} />);
  });

  test('should render correctly', () => {
    expect(FieldToggleComponent).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    FieldToggleComponent = mountWithTheme(
      <Form>
        <FieldToggleVanilla {...userFormToggleProps} />
      </Form>
    );
    expect(FieldToggleComponent.find('label').length).toEqual(2);
  });

  test('should render label with Value correctly', () => {
    expect(
      FieldToggleComponent.find('.labelName')
        .dive()
        .text()
    ).toEqual(userFormToggleProps.label);
  });

  test('should render input correctly', () => {
    FieldToggleComponent = mountWithTheme(
      <Form>
        <FieldToggleVanilla {...userFormToggleProps} />
      </Form>
    );
    expect(FieldToggleComponent.find('input').length).toEqual(1);
  });

  test('should render disabled input', () => {
    FieldToggleComponent = mountWithTheme(
      <Form>
        <FieldToggleVanilla {...userFormToggleProps} disabled />
      </Form>
    );
    expect(FieldToggleComponent.find('input').find({ disabled: true })).toHaveLength(1);
  });

  test('should render click event with toggle Value', () => {
    const handleToggle = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation(toggleOn => [toggleOn, handleToggle]);
    FieldToggleComponent = mountWithTheme(
      <Form>
        <FieldToggleVanilla {...userFormToggleProps} />
      </Form>
    );
    FieldToggleComponent.find('input[type="checkbox"]')
      .at(0)
      .simulate('click', { target: { checked: true } });
    expect(handleToggle).toHaveBeenCalledWith(true);
  });

  test('should render Indicator On', () => {
    FieldToggleComponent = mountWithTheme(
      <Form>
        <FieldToggleVanilla {...userFormToggleProps} toggleValue />
      </Form>
    );
    FieldToggleComponent.find('input[type="checkbox"]')
      .at(0)
      .simulate('click', { target: {} });
    expect(FieldToggleComponent.find('.toggleLabel').text()).toEqual(
      userFormToggleProps.indicatorOn
    );
  });
});
