import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Header from '../index';

describe('<Header />', () => {
  let HeaderComponent = '';
  beforeEach(() => {
    HeaderComponent = shallow(<Header>Test</Header>);
  });

  test('should render correctly', () => {
    expect(HeaderComponent).toMatchSnapshot();
  });
});
