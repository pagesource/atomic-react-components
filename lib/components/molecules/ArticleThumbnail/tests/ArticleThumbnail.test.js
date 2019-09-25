import { shallow } from 'enzyme';

import ArticleThumbnail from '../index';
import defaultConfig, { configV2 } from '../ArticleThumbnail.mock';

describe('<ArticleThumbnail />', () => {
  test('should render correctly with Readmore', () => {
    console.log(configV2);
    const ArticleThumbnailComponent = shallow(
      <ArticleThumbnail {...configV2}>Test</ArticleThumbnail>
    );
    expect(ArticleThumbnailComponent).toMatchSnapshot();
  });
  test('should render correctly with full clickable thumb', () => {
    const ArticleThumbnailComponent = shallow(
      <ArticleThumbnail {...defaultConfig}>Test</ArticleThumbnail>
    );
    expect(ArticleThumbnailComponent).toMatchSnapshot();
  });
});
