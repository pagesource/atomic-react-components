import React from 'react';
import { shallowWithTheme } from '../../../../../__mock__/themeMock';
import { HeroBannerVanilla } from '../index';
import { defaultHeroBanner } from '../HeroBanner.mock';
import Image from '../../../atoms/Image/Image';
import Button from '../../../atoms/Button/Button';
import Para from '../../../atoms/Para/Para';

describe('<HeroBanner />', () => {
  let HeroBannerComponent = '';
  beforeEach(() => {
    HeroBannerComponent = shallowWithTheme(
      <HeroBannerVanilla defaultHeroBanner={defaultHeroBanner} />
    );
  });

  test('should render correctly', () => {
    expect(HeroBannerComponent).toMatchSnapshot();
  });

  test('should render a div', () => {
    expect(HeroBannerComponent.find('section').length).toEqual(1);
  });

  test('should render a header', () => {
    expect(HeroBannerComponent.find('header').length).toEqual(1);
  });

  test('should render a header with role as banner', () => {
    expect(HeroBannerComponent.find('header').prop('role')).toEqual('banner');
  });

  test('should render Hero Image', () => {
    HeroBannerComponent = shallowWithTheme(<HeroBannerVanilla renderHeroImage={() => <Image />} />);
    expect(HeroBannerComponent.find('Image').length).toEqual(1);
  });

  test('should render childen', () => {
    HeroBannerComponent = shallowWithTheme(
      <HeroBannerVanilla defaultHeroBanner={defaultHeroBanner}>
        <Para>Content of the banner will be placed here</Para>
      </HeroBannerVanilla>
    );
    expect(HeroBannerComponent.find('Para').length).toEqual(1);
  });

  test('should render Hero-Carousel', () => {
    /* Since carousel component is not there then for now using Button atom */
    HeroBannerComponent = shallowWithTheme(
      <HeroBannerVanilla renderExternalContent={() => <Button />} />
    );
    expect(HeroBannerComponent.find('Button').length).toEqual(1);
  });
});
