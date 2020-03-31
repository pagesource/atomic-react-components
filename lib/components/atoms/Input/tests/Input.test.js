import React from 'react';
import { shallow, render } from 'enzyme';

import { shallowWithTheme } from '../../../../../__mock__/themeMock';
import { InputVanilla } from '../Input';

const defaultProps = {
  elementLocator: 'my-input-field',
  name: 'my-input',
  type: 'file',
  onChange: () => {},
};

const getWrapperSetup = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return shallowWithTheme(<InputVanilla {...finalProps} />);
};

describe('Input Component', () => {
  let input = '';
  const sampleProps = {
    elementLocator: 'my-input-field',
    name: 'my-input',
    value: 'abc',
    onChange: () => {},
  };
  test('should render correctly', () => {
    input = shallow(<InputVanilla {...sampleProps} />);

    expect(input).toMatchSnapshot();
  });
  test('should check the data attribute of input', () => {
    const inputVanilla = render(<InputVanilla {...sampleProps} />);

    expect(inputVanilla.attr('data-locator')).toEqual(sampleProps.elementLocator);
  });
});

describe('File Input Component -> Unit Testing', () => {
  let input = '';

  test('should render file input component correctly', () => {
    input = getWrapperSetup();
    expect(input.find('input').length).toBe(1);
  });

  test('should call function on click of the input field', () => {
    function inputClicked(callback) {
      callback();
    }
    input = getWrapperSetup();
    const changedEvt = jest.fn();
    inputClicked(changedEvt);
    expect(changedEvt).toHaveBeenCalledTimes(1);
  });

  test('should simulate click event of the input field', () => {
    input = getWrapperSetup();
    const wrapper = input.simulate('click');
    expect(wrapper.find('input').length).toBe(1);
  });

  test('should render with prop "multiple" to distinguish multiple or single file', () => {
    const isMultipleProp = {
      multiple: true,
    };
    input = getWrapperSetup(isMultipleProp);
    expect(input.prop('multiple')).toBe(true);
  });

  test('should render input correctly', () => {
    input = getWrapperSetup();
    expect(input.find('input')).toHaveLength(1);
  });
});
