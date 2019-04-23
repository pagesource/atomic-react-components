import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Body from '../index';

describe('<Body />', () => {
  let BodyComponent = '';
  beforeEach(() => {
    BodyComponent = shallow(<Body>Test</Body>);
  });

  test('should render correctly', () => {
    expect(BodyComponent).toMatchSnapshot();
  });
});
