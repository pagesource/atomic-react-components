import { shallow, render } from 'enzyme';

import Video from '../index';
import defaultConfig from '../Video.mock';

describe('<Video />', () => {
  let VideoComponent = '';
  beforeEach(() => {
    VideoComponent = shallow(<Video {...defaultConfig}>Test</Video>);
  });
  it('should have videoTag', () => {
    expect(VideoComponent.find('video')).toBeTruthy();
  });
  it('should have sourceTag', () => {
    expect(VideoComponent.find('video').find('source')).toBeTruthy();
  });

  test('should be autoPlay', () => {
    const videoAutoPlay = render(<Video {...defaultConfig} />);
    expect(videoAutoPlay.attr('autoplay')).toEqual('autoplay');
  });

  test('should have srcAttr', () => {
    const videoAutoPlay = render(<Video {...defaultConfig} />);
    expect(videoAutoPlay.find('source').attr('src')).toEqual(defaultConfig.src);
  });

  test('should render correctly', () => {
    expect(VideoComponent).toMatchSnapshot();
  });
});
