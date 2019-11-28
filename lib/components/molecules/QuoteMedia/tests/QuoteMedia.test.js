import { shallow } from 'enzyme';

import QuoteMedia from '../index';
import defaultConfig from '../QuoteMedia.mock';

describe('QuoteMedia', () => {
  let QuoteMediaComponent = '';
  beforeEach(() => {
    QuoteMediaComponent = shallow(<QuoteMedia {...defaultConfig}>Test</QuoteMedia>);
  });
  it('should have blockquote', () => {
    expect(QuoteMediaComponent.find('.blockquote__author')).toBeTruthy();
  });
  it('renders the value of author', () => {
    QuoteMediaComponent.setProps({
      author: 'author',
    });
    expect(QuoteMediaComponent.find('.blockquote__author').text()).toEqual('author');
  });
  it('should have image or video container', () => {
    expect(QuoteMediaComponent.find('.media')).toBeTruthy();
  });
  it('should render correctly', () => {
    expect(QuoteMediaComponent).toMatchSnapshot();
  });
});
