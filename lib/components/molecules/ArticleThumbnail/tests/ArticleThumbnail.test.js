import { shallow } from 'enzyme';

import ArticleThumbnail from '../index';

describe('<ArticleThumbnail />', () => {
  let ArticleThumbnailComponent = '';
  beforeEach(() => {
    ArticleThumbnailComponent = shallow(<ArticleThumbnail>Test</ArticleThumbnail>);
  });

  test('should render correctly', () => {
    expect(ArticleThumbnailComponent).toMatchSnapshot();
  });
});
