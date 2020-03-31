import React from 'react';
import { FieldToggleVanilla } from '../index';
import { userFormToggleProps } from '../../Form.mock';
import Form from '../../Form';
import { shallowWithTheme, mountWithTheme } from '../../../../../../__mock__/themeMock';

describe('<FieldToggle />', () => {
  let FieldToggleComponent = '';

  test('should render correctly', () => {
    FieldToggleComponent = shallowWithTheme(<FieldToggleVanilla {...userFormToggleProps} />);
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
    FieldToggleComponent = shallowWithTheme(<FieldToggleVanilla {...userFormToggleProps} />);
    expect(FieldToggleComponent.find('.label-name').dive().text()).toEqual(
      userFormToggleProps.label
    );
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

  test('should tigger click event with toggle Value', () => {
    const handleToggle = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation((toggle) => [toggle, handleToggle]);
    FieldToggleComponent = mountWithTheme(
      <Form>
        <FieldToggleVanilla {...userFormToggleProps} />
      </Form>
    );
    FieldToggleComponent.find('input[type="checkbox"]')
      .at(0)
      .simulate('click', { target: { clicked: true } });
    expect(handleToggle).toHaveBeenCalledWith(true);
  });

  test('should render Indicator On', () => {
    FieldToggleComponent = mountWithTheme(
      <Form>
        <FieldToggleVanilla {...userFormToggleProps} intialToggleState />
      </Form>
    );
    FieldToggleComponent.find('input[type="checkbox"]').at(0).simulate('click', { target: {} });
    expect(FieldToggleComponent.find('.toggle-label').text()).toEqual(
      userFormToggleProps.indicatorOn
    );
  });

  test('should tigger handleToggleCallback function', () => {
    const handleToggleCallback = jest.fn();
    FieldToggleComponent = mountWithTheme(
      <Form>
        <FieldToggleVanilla {...userFormToggleProps} handleToggleCallback={handleToggleCallback} />
      </Form>
    );
    FieldToggleComponent.find('input[type="checkbox"]')
      .at(0)
      .simulate('click', { target: { clicked: true } });
    expect(handleToggleCallback).toHaveBeenCalled();
  });
});
