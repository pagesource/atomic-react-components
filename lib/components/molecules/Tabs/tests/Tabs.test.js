import React from 'react';
import { shallowWithTheme, mountWithTheme } from '../../../../../__mock__/themeMock';

import { defaultTabs } from '../Tabs.mock';
import { TabsVanilla } from '../index';

describe('<Tabs />', () => {
  let TabsComponent = '';

  beforeEach(() => {
    TabsComponent = shallowWithTheme(<TabsVanilla {...defaultTabs} />);
  });

  test('should render correctly', () => {
    expect(TabsComponent).toMatchSnapshot();
  });
});

describe('<Tabs /> functional behavior', () => {
  let TabsComponent = '';
  const onChange = jest.fn();

  beforeEach(() => {
    TabsComponent = mountWithTheme(<TabsVanilla {...defaultTabs} onTabChange={onChange} />);
  });

  test('should have minimum dom structure for the tests below', () => {
    expect(TabsComponent.find('ul[role="tablist"] li').length).toEqual(2);
    expect(TabsComponent.find('[role="tabpanel"]').length).toEqual(2);
  });

  test('should change the tab panel and execute callback on closed tab click', () => {
    TabsComponent.find('#tab_1').simulate('click');
    expect(onChange).toBeCalledWith(1);
  });
});
