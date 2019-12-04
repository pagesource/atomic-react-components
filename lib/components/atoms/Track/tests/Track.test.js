import { shallow } from 'enzyme';

import Track from '../index';

describe('<Track />', () => {
  let TrackComponent = '';
  beforeEach(() => {
    TrackComponent = shallow(<Track>Test</Track>);
  });

  test('should render correctly', () => {
    expect(TrackComponent).toMatchSnapshot();
  });
});
