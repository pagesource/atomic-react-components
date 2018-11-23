import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Dots from '../index';

describe('<Dots />', () => {
  let DotsComponent = '';
  beforeEach(() => {
    DotsComponent = shallow(<Dots>Test</Dots>);
  });

  test('should render correctly', () => {
    expect(DotsComponent).toMatchSnapshot();
  });
});
