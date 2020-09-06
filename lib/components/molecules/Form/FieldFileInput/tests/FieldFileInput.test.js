import React from 'react';

import { shallowWithTheme } from '../../../../../../__mock__/themeMock';
import { FieldFileInputVanilla } from '../FieldFileInput';
import Button from '../../../../atoms/Button';
import Input from '../../../../atoms/Input';

const defaultProps = {
  name: 'fileupload',
  localeText: {
    btnTextPrimary: 'Choose File(s)',
    btnTextSecondary: 'Upload...',
    dragHelperText: 'Drop Files Here...',
  },
};

describe('FieldInput Component', () => {
  let FieldInput = '';
  beforeEach(() => {
    FieldInput = shallowWithTheme(<FieldFileInputVanilla {...defaultProps} />);
  });

  test('should render correctly', () => {
    expect(FieldInput).toMatchSnapshot();
  });

  test.skip('should render button with type = "button".', () => {
    expect(FieldInput.find('Button')).toHaveLength(2);
  });

  test('should render 1st button with theme prop type, tertiary', () => {
    // FieldInput = renderWithTheme(<FieldFileInputVanilla {...defaultProps} />);
    const doesExist = FieldInput.find(Button).first().prop('tertiary');
    expect(doesExist).toBeTruthy();
  });

  test('should render 2nd button with theme prop type, primary', () => {
    const doesExist = FieldInput.find(Button).at(1).prop('primary');
    expect(doesExist).toBeTruthy();
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

  test.skip('should match the input rendered correctly on change event simulation.', () => {
    const inputElement = FieldInput.find('Input');
    const wrapper = inputElement.simulate('change');
    expect(wrapper.find('Input').length).toBe(1);
  });

  test('should match the input rendered correctly on blur event simulation.', () => {
    const inputElement = FieldInput.find(Input);
    const wrapper = inputElement.simulate('blur');
    expect(wrapper.find(Input).length).toBe(1);
  });
});
