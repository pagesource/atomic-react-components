import React from 'react';
import { shallow } from 'enzyme';

import { TabVanilla } from '../index';

describe('<Tab />', () => {
  let TabComponent = '';
  beforeEach(() => {
    TabComponent = shallow(<TabVanilla>Test</TabVanilla>);
  });

  test('should render correctly', () => {
    expect(TabComponent).toMatchSnapshot();
  });
});
