import React from 'react';
import { shallow, render } from 'enzyme';
import { InputVanilla } from '../Input';

describe('Input Component', () => {
  let input = '';
  const sampleProps = {
    elementLocator: 'my-input-field',
    name: 'my-input',
    value: 'abc',
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
