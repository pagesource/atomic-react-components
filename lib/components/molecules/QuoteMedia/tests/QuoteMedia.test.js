import React from 'react';
import { shallow } from 'enzyme';
import Blockquote from '../../../atoms/Blockquote/Blockquote';
import Heading from '../../../atoms/Heading/Heading';
import { QuoteMediaVanilla } from '../QuoteMedia';
import defaultConfig from '../QuoteMedia.mock';

describe('<QuoteMedia />', () => {
  let QuoteMediaComponent = '';
  beforeEach(() => {
    QuoteMediaComponent = shallow(<QuoteMediaVanilla {...defaultConfig} />);
  });
  it('should render heading component', () => {
    expect(QuoteMediaComponent.find(<Heading />)).toBeTruthy();
  });
  it('should render blockquote component', () => {
    expect(QuoteMediaComponent.find(<Blockquote />)).toBeTruthy();
  });
  it('check props passed in', () => {
    expect(QuoteMediaComponent.props().quoteContent).not.toBeNull();
  });
  it('should have image or video container', () => {
    expect(QuoteMediaComponent.find('.media')).toBeTruthy();
  });
  test('should render correctly', () => {
    expect(QuoteMediaComponent).toMatchSnapshot();
  });
});
