import React from 'react';
import { shallow } from 'enzyme';

import { TabPanelVanilla } from '../index';

describe('<TabPanel />', () => {
  let TabPanelComponent = '';
  beforeEach(() => {
    TabPanelComponent = shallow(<TabPanelVanilla>Test</TabPanelVanilla>);
  });

  test('should render correctly', () => {
    expect(TabPanelComponent).toMatchSnapshot();
  });
});
