import React from 'react';
import { shallow } from 'enzyme';
import { QuoteMediaVanilla } from '../QuoteMedia';
import defaultQuoteMedia from '../QuoteMedia.mock';

describe('<QuoteMedia />', () => {
  let QuoteMediaComponent = '';
  beforeEach(() => {
    QuoteMediaComponent = shallow(<QuoteMediaVanilla {...defaultQuoteMedia} />);
  });
  it('check props passed in', () => {
    expect(QuoteMediaComponent.props().title).not.toBeNull();
  });
  it('check props passed in', () => {
    expect(QuoteMediaComponent.props().quoteContent).not.toBeNull();
  });
  test('should render correctly', () => {
    expect(QuoteMediaComponent).toMatchSnapshot();
  });
});
