import { shallow } from 'enzyme';

import ListItem from '../index';

describe('<ListItem />', () => {
  let ListItemComponent = '';
  beforeEach(() => {
    ListItemComponent = shallow(<ListItem>Test</ListItem>);
  });

  test('should render correctly', () => {
    expect(ListItemComponent).toMatchSnapshot();
  });
});
