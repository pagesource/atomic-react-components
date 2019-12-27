import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Pagination from '../index';

describe('<Pagination />', () => {
  let PaginationComponent = '';
  beforeEach(() => {
    PaginationComponent = shallow(<Pagination>Test</Pagination>);
  });

  test('should render correctly', () => {
    expect(PaginationComponent).toMatchSnapshot();
  });
});
