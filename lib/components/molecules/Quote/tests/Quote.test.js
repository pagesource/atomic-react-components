import React from 'react';
import { shallow, mount } from 'enzyme';
import { QuoteVanilla } from '../index';
import { defaultQuote, noAuthorQuote, noCompanyQuote } from '../Quote.mock';

describe('<Quote /> Rendering', () => {
  test('should render correctly with all fields', () => {
    const quote = shallow(<QuoteVanilla {...defaultQuote} />);
    expect(quote).toMatchSnapshot();
  });

  test('should render correctly with no author', () => {
    const quote = shallow(<QuoteVanilla {...noAuthorQuote} />);
    expect(quote).toMatchSnapshot();
  });

  test('should render correctly with no company', () => {
    const quote = shallow(<QuoteVanilla {...noCompanyQuote} />);
    expect(quote).toMatchSnapshot();
  });

  test('should render correctly with all fields', () => {
    const quote = mount(<QuoteVanilla {...defaultQuote} />);

    expect(quote.find('.quote__author').text()).toEqual('Stephen Covey, My company');
  });

  test('should render correctly with no author', () => {
    const quote = mount(<QuoteVanilla {...noAuthorQuote} />);
    console.log('ghost');
    console.log(quote.find('.quote__author'));
    expect(quote.find('.quote__author').text()).toEqual('My company');
  });

  test('should render correctly with no company', () => {
    const quote = mount(<QuoteVanilla {...noCompanyQuote} />);
    expect(quote.find('.quote__author').text()).toEqual('Stephen Covey');
  });
});
