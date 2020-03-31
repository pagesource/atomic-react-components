import { mount, render, shallow } from 'enzyme';
import React from 'react';
import { VideoVanilla } from '../index';
import { vanillaDefaultConfig } from '../Video.mock';
/* eslint-disable jsx-a11y/media-has-caption */
describe('<Video />', () => {
  let VideoComponent = '';
  beforeEach(() => {
    VideoComponent = shallow(
      <VideoVanilla {...vanillaDefaultConfig}>
        <VideoVanilla.trackVanilla />
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
      <video>
        <source src={vanillaDefaultConfig.src} type="mp4" />
      </video>
    );
    expect(VideoComponentRender.find('source').attr('src')).toEqual(vanillaDefaultConfig.src);
  });

  it('should not be autoplay', () => {
    expect(VideoComponent.prop('autoPlay')).toBeFalsy();
  });

  it('should not have track element only should have Track component', () => {
    expect(VideoComponent.matchesElement(<track />)).toBe(false);
  });

  it('should have children', () => {
    const tempArr = [
      { src: '/', srcLang: 'de', label: 'German', id: 2, isDefault: false },
      { src: '/', srcLang: 'fr', label: 'Franch', id: 3, isDefault: false },
      { src: '/', srcLang: 'hi', label: 'Hindi', id: 4, isDefault: false },
    ];
    const VideoComponentMount = mount(
      <VideoVanilla {...vanillaDefaultConfig}>
        {tempArr.map((item) => {
          return (
            <VideoVanilla.trackVanilla
              src={item.src}
              default={item.isDefault}
              kind="subtitles"
              srcLang={item.srcLang}
              label={item.label}
              key={item.id}
            />
          );
        })}
      </VideoVanilla>
    );
    expect(VideoComponentMount.find('track')).toHaveLength(3);
  });

  it('track component without data', () => {
    const tempArr = [];
    const VideoComponentMount = mount(
      <VideoVanilla {...vanillaDefaultConfig}>
        {tempArr.map((item) => {
          return (
            <VideoVanilla.trackVanilla
              src={item.src}
              default={item.isDefault}
              kind="subtitles"
              srcLang={item.srcLang}
              label={item.label}
              key={item.id}
            />
          );
        })}
      </VideoVanilla>
    );
    expect(VideoComponentMount.find('track')).toHaveLength(1);
  });

  test('should render correctly', () => {
    expect(VideoComponent).toMatchSnapshot();
  });
});
