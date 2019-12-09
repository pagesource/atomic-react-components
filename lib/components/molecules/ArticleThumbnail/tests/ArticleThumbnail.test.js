import React from 'react';
import { shallow } from 'enzyme';

import { ArticleThumbnailVanilla } from '../index';
import defaultConfig, { configV2 } from '../ArticleThumbnail.mock';

describe('<ArticleThumbnail />', () => {
  test('should render correctly with Readmore', () => {
    const ArticleThumbnailComponent = shallow(
      <ArticleThumbnailVanilla {...configV2}>Test</ArticleThumbnailVanilla>
    );
    expect(ArticleThumbnailComponent).toMatchSnapshot();
  });
  test('should render correctly with full clickable thumb', () => {
    const ArticleThumbnailComponent = shallow(
      <ArticleThumbnailVanilla {...defaultConfig}>Test</ArticleThumbnailVanilla>
    );
    expect(ArticleThumbnailComponent).toMatchSnapshot();
  });
});
