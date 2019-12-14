import { shallow } from 'enzyme';

import SearchList from '../SearchList';

describe('<SearchList />', () => {
  let SearchListComponent = '';
  beforeEach(() => {
    SearchListComponent = shallow(<SearchList>Test</SearchList>);
  });

  test('should render correctly', () => {
    expect(SearchListComponent).toMatchSnapshot();
  });
});
