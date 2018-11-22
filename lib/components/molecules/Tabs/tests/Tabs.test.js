import { shallow, mount } from 'enzyme';
import { defaultTabs } from '../Tabs.mock';

import Tabs from '../index';

describe('<Tabs />', () => {
  let TabsComponent = '';

  beforeEach(() => {
    TabsComponent = shallow(<Tabs {...defaultTabs} />);
  });

  test('should render correctly', () => {
    expect(TabsComponent).toMatchSnapshot();
  });
});

describe('<Tabs /> functional behavior', () => {
  let TabsComponent = '';
  const onChange = jest.fn();

  beforeEach(() => {
    TabsComponent = mount(<Tabs {...defaultTabs} onTabChange={onChange} />);
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
