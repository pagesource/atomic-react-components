import { shallow } from 'enzyme';

import Video from '../index';

describe('<Video />', () => {
  let VideoComponent = '';
  beforeEach(() => {
    VideoComponent = shallow(<Video>Test</Video>);
  });

  test('should render correctly', () => {
    expect(VideoComponent).toMatchSnapshot();
  });
});
