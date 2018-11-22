import React from 'react';
import { shallow } from 'enzyme';
import { InputVanilla } from '../Input';

describe('Input Component', () => {
  let input = '';

  test('should render correctly', () => {
    input = shallow(<InputVanilla value="abc" />);
    expect(input).toMatchSnapshot();
  });
});
