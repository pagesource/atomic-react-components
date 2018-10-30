import React from 'react';
import { shallow } from 'enzyme';
import { Debug } from '../Debug';

describe('Debug', () => {
  test('should render correctly', () => {
    expect(shallow(<Debug />)).toMatchSnapshot();
  });
});
