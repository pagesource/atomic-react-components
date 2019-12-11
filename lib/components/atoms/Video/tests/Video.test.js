import React from 'react';
import { shallow, render } from 'enzyme';

import { VideoVanilla } from '../index';
import defaultConfig from '../Video.mock';

const videoContainer = (
  <VideoVanilla {...defaultConfig}>
    <source src={defaultConfig.src} />
    <track />
  </VideoVanilla>
);
describe('<Video />', () => {
  let VideoComponent = '';
  beforeEach(() => {
    VideoComponent = shallow(
      <VideoVanilla {...defaultConfig}>
        <track />
      </VideoVanilla>
    );
  });

  it('should have video tag', () => {
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

  it('should not be autoplay', () => {
    const VideoComponentRender = shallow(videoContainer);
    expect(VideoComponentRender.prop('autoPlay')).toBeFalsy();
  });

  test('should render correctly', () => {
    expect(VideoComponent).toMatchSnapshot();
  });
});
