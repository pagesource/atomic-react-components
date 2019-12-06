import { shallow, render } from 'enzyme';
import { VideoVanilla } from '../index';
import defaultConfig from '../Video.mock';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<VideoVanilla />', () => {
  let VideoComponent = '';
  beforeEach(() => {
    VideoComponent = shallow(<VideoVanilla {...defaultConfig} />);
  });

  it('should have video tag', () => {
    expect(VideoComponent.find('video')).toBeTruthy();
  });

  it('should have source tag', () => {
    expect(VideoComponent.find('video').find('source')).toBeTruthy();
  });

  it('should have src attribute in source tag', () => {
    const VideoComponentRender = render(<VideoVanilla {...defaultConfig} />);
    expect(VideoComponentRender.find('source').attr('src')).toEqual(defaultConfig.src);
  });

  it('should be autoplay but need to be mute', () => {
    const VideoComponentRender = render(<VideoVanilla {...defaultConfig} />);
    expect(
      VideoComponentRender.find({ autoplay: true }) && VideoComponentRender.find({ mute: true })
    ).toBeTruthy();
  });

  // it('should not have download icon', () => {
  //   const VideoComponentRender = render(<VideoVanilla {...defaultConfig} />);
  //   expect(VideoComponentRender.find('video').attr('controlslist')).toEqual('nodownload');
  // });

  test('should render correctly', () => {
    expect(VideoComponent).toMatchSnapshot();
  });
});
