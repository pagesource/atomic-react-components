import React from 'react';
import { shallow } from 'enzyme';
import { SelectVanilla } from '../Select';

describe('Select Component', () => {
  let input = '';

  test('should render correctly', () => {
    input = shallow(<SelectVanilla options={['Option 1', 'Option 2']} />);
    expect(input).toMatchSnapshot();
  });
});
