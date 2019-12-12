import React from 'react';

import { shallowWithTheme } from '../../../../../../__mock__/themeMock';
import { FieldFileInput } from '../FieldFileInput';
import Button from '../../../../atoms/Button';

const defaultProps = {
  name: 'fileupload',
  type: 'file',
  localeText: {
    btnTextPrimary: 'Choose File(s)',
    btnTextSecondary: 'Upload...',
    dragHelperText: 'Drop Files Here...',
  },
};

const getWrapperSetup = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return shallowWithTheme(<FieldFileInput {...finalProps} />);
};

describe('FieldInput Component', () => {
  let FieldInput = '';
  beforeEach(() => {
    FieldInput = getWrapperSetup();
  });

  test('should render correctly', () => {
    expect(FieldInput).toMatchSnapshot();
  });

  test('should render button with type = "button".', () => {
    expect(FieldInput.find('Button')).toHaveLength(2);
  });

  test('should render 1st button with theme prop type, teritary', () => {
    const doesExist = FieldInput.find('Button')
      .first()
      .prop('tertiary');
    expect(doesExist).toBeTruthy();
  });

  test('should render 2nd button with theme prop type, primary', () => {
    const doesExist = FieldInput.find('Button')
      .at(1)
      .prop('primary');
    expect(doesExist).toBeTruthy();
  });

  test.skip('should simulate button click', () => {
    const button = FieldInput.find(Button).first();
    button.simulate('click');
    expect(button.find('Button')).toHaveLength(1);
  });

  test('should match the button text rendered', () => {
    const button = FieldInput.find(Button).first();
    expect(button.text()).toContain('Choose');
  });

  test('should match the button text rendered for second button', () => {
    const button = FieldInput.find(Button).at(1);
    expect(button.text()).toContain('Upload...');
  });

  test('should match the label rendered correctly.', () => {
    const doesExist = FieldInput.find('label');
    expect(doesExist).toBeTruthy();
  });

  test('should match the input rendered correctly.', () => {
    const doesExist = FieldInput.find('input');
    expect(doesExist).toBeTruthy();
  });

  test('should match the input rendered correctly on change event simulation.', () => {
    const inputElement = FieldInput.find('Field');
    const wrapper = inputElement.simulate('change');
    expect(wrapper.find('Field').length).toBe(1);
  });

  test('should match the input rendered correctly on blur event simulation.', () => {
    const inputElement = FieldInput.find('Field');
    const wrapper = inputElement.simulate('blur');
    expect(wrapper.find('Field').length).toBe(1);
  });
});
