import React from 'react';
import { shallowWithTheme } from '../../../../../__mock__/themeMock';
import { HeroBannerVanilla } from '../index';
import { stackedHeroBanner } from '../HeroBanner.mock';
import Para from '../../../atoms/Para/Para';

describe('<HeroBanner />', () => {
  let HeroBannerComponent = '';
  beforeEach(() => {
    HeroBannerComponent = shallowWithTheme(<HeroBannerVanilla {...stackedHeroBanner} />);
  });

  test('should render correctly', () => {
    expect(HeroBannerComponent).toMatchSnapshot();
  });

  test('should render a div', () => {
    expect(HeroBannerComponent.find('section').length).toEqual(1);
  });

  test('should render a header', () => {
    expect(HeroBannerComponent.find('.wrap').length).toEqual(1);
  });

  test('should render a header with role as banner', () => {
    expect(HeroBannerComponent.find('header').prop('role')).toEqual('banner');
  });

  test.skip('should render Hero Image', () => {
    expect(HeroBannerComponent.find('Image').length).toEqual(1);
  });

  test.skip('should render children', () => {
    HeroBannerComponent = shallowWithTheme(
      <HeroBannerVanilla {...stackedHeroBanner}>
        <Para>Content of the banner will be placed here</Para>
      </HeroBannerVanilla>
    );
    expect(HeroBannerComponent.find('Para').length).toEqual(1);
  });
});
