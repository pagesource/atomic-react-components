import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Tabs from '../index';

describe('<Tabs />', () => {
  let TabsComponent = '';
  beforeEach(() => {
    TabsComponent = shallow(<Tabs>Test</Tabs>);
  });

  test('should render correctly', () => {
    expect(TabsComponent).toMatchSnapshot();
  });
});
