import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Breadcrumb from '../index';

describe('<Breadcrumb />', () => {
  let BreadcrumbComponent = '';
  beforeEach(() => {
    BreadcrumbComponent = shallow(<Breadcrumb>Test</Breadcrumb>);
  });

  test('should render correctly', () => {
    expect(BreadcrumbComponent).toMatchSnapshot();
  });
});
