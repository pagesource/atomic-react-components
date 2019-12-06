import React from 'react';

import { shallowWithTheme } from '../../../../../__mock__/themeMock';
import { FileInput } from '../FileInput';

describe('Input Component', () => {
  let input = '';
  const sampleProps = {
    elementLocator: 'my-input-field',
    name: 'my-input',
    type: 'file',
    value: 'abc',
    onChange: () => { },
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
    function inputClicked(callback, evtType) {
      callback();
    }
    input = shallowWithTheme(<FileInput {...sampleProps} />);
    const clicked = jest.fn();
    inputClicked(clicked, 'change');
    expect(clicked).toHaveBeenCalledTimes(1);
  });
  test('should simulate click event of the input field', () => {
    input = shallowWithTheme(<FileInput {...sampleProps} />);
    const wrapper = input.simulate('click');
    expect(wrapper.find('input').length).toBe(1);
  });
});
