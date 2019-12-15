import { shallow } from 'enzyme';
import Search from '../index';

describe('<Search />', () => {
  let SearchComponent = '';
  beforeEach(() => {
    SearchComponent = shallow(<Search>Test</Search>);
  });

  test('should render correctly', () => {
    expect(SearchComponent).toMatchSnapshot();
  });
});
