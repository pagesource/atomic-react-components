import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Breadcrumb from '../index';
import defaultConfig from '../Breadcrumb.mock';

describe('<Breadcrumb />', () => {
  let BreadcrumbComponent = '';
  beforeEach(() => {
    BreadcrumbComponent = shallow(<Breadcrumb {...defaultConfig} />);
  });

  test('should render correctly', () => {
    expect(BreadcrumbComponent).toMatchSnapshot();
  });
});
