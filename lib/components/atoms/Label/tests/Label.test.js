import React from 'react';
import { shallow } from 'enzyme';
import Label from '../Label';

describe('Label Component', () => {
  let label = '';

  test('should render correctly', () => {
    label = shallow(<Label htmlFor="userid"> User Name </Label>);
    expect(label).toMatchSnapshot();
  });
});
