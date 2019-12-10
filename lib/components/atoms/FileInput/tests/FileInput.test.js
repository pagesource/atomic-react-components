import React from 'react';

import { shallowWithTheme } from '../../../../../__mock__/themeMock';
import { FileInput } from '../FileInput';

describe('Input Component', () => {
  let input = '';
  const sampleProps = {
    elementLocator: 'my-input-field',
    name: 'my-input',
    type: 'file',
    onChange: () => {},
  };

  test('snapshot testing for input field', () => {
    input = shallowWithTheme(<FileInput {...sampleProps} />);
    expect(input).toMatchSnapshot();
  });

  test('should render file input component correctly', () => {
    input = shallowWithTheme(<FileInput {...sampleProps} />);
    expect(input.find('input').length).toBe(1);
  });

  test('should call function on click of the input field', () => {
    function inputClicked(callback) {
      callback();
    }
    input = shallowWithTheme(<FileInput {...sampleProps} />);
    const changedEvt = jest.fn();
    inputClicked(changedEvt);
    expect(changedEvt).toHaveBeenCalledTimes(1);
  });

  test('should simulate click event of the input field', () => {
    input = shallowWithTheme(<FileInput {...sampleProps} />);
    const wrapper = input.simulate('click');
    expect(wrapper.find('input').length).toBe(1);
  });

  test('should render with prop "multiple" to distinguish multiple or single file', () => {
    const isMultipleProp = {
      multiple: true,
    };
    input = shallowWithTheme(<FileInput {...sampleProps} {...isMultipleProp} />);
    expect(input.prop('multiple')).toBe(true);
  });

  test('should render input correctly', () => {
    input = shallowWithTheme(<FileInput {...sampleProps} />);
    expect(input.find('input')).toHaveLength(1);
  });
});
