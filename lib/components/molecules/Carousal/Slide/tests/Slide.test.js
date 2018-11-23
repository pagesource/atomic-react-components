import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Slide from '../index';

describe('<Slide />', () => {
  let SlideComponent = '';
  beforeEach(() => {
    SlideComponent = shallow(<Slide>Test</Slide>);
  });

  test('should render correctly', () => {
    expect(SlideComponent).toMatchSnapshot();
  });
});
