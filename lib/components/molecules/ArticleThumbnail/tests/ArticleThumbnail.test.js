import { shallow } from 'enzyme';

import ArticleThumbnail from '../index';
import defaultConfig, { configV3, configV2 } from '../ArticleThumbnail.mock';

describe('<ArticleThumbnail />', () => {
  test('should render correctly', () => {
    const ArticleThumbnailComponent = shallow(<ArticleThumbnail>Test</ArticleThumbnail>);
    expect(ArticleThumbnailComponent).toMatchSnapshot();
  });
  test('should render correctly with readmore button', () => {
    const ArticleThumbnailComponent = shallow(
      <ArticleThumbnail {...configV3}>Test</ArticleThumbnail>
    );
    expect(ArticleThumbnailComponent).toMatchSnapshot();
  });
  test('should render correctly with clickable image and title', () => {
    const ArticleThumbnailComponent = shallow(
      <ArticleThumbnail {...configV2}>Test</ArticleThumbnail>
    );
    expect(ArticleThumbnailComponent).toMatchSnapshot();
  });
  test('should render correctly with no clickable image and title', () => {
    const ArticleThumbnailComponent = shallow(
      <ArticleThumbnail {...defaultConfig}>Test</ArticleThumbnail>
    );
    expect(ArticleThumbnailComponent).toMatchSnapshot();
  });
});
