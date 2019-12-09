import React from 'react';
import { shallow, render } from 'enzyme';

import { VideoVanilla } from '../index';
import defaultConfig from '../Video.mock';

describe('<Video />', () => {
  let VideoComponent = '';
  beforeEach(() => {
    VideoComponent = shallow(<VideoVanilla {...defaultConfig}>Test</VideoVanilla>);
  });

  it('should have video tag', () => {
    console.log(VideoComponent.find('video'));
    expect(VideoComponent.find('video')).toBeTruthy();
  });

  it('should have source tag in video', () => {
    expect(VideoComponent.find('video').find('source')).toBeTruthy();
  });

  it('should have src attribute in source tag', () => {
    const VideoComponentRender = render(
      <VideoVanilla {...defaultConfig}>
        <source src={defaultConfig.src} type="mp4" />
        <track />
      </VideoVanilla>
    );
    expect(VideoComponentRender.find('source').attr('src')).toEqual(defaultConfig.src);
  });

  it('should be autoplay but need to be mute', () => {
    const VideoComponentRender = render(
      <VideoVanilla {...defaultConfig}>
        <source src={defaultConfig.src} />
        <track />
      </VideoVanilla>
    );
    expect(
      VideoComponentRender.find({ autoplay: true }) && VideoComponentRender.find({ mute: true })
    ).toBeTruthy();
  });

  test('should render correctly', () => {
    expect(VideoComponent).toMatchSnapshot();
  });
});
