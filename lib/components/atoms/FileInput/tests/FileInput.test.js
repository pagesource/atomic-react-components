import React from 'react';
import { shallow } from 'enzyme';
import { FileInput } from '../FileInput';

describe('Input Component', () => {
  let input = '';
  const sampleProps = {
    elementLocator: 'my-input-field',
    name: 'my-input',
    type: 'file',
    value: 'abc',
    onChange: () => {},
  };
  test('should render correctly', () => {
    input = shallow(<FileInput {...sampleProps} />);
    expect(input).toMatchSnapshot();
  });
});
