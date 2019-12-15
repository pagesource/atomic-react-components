import React from 'react';
import { shallow } from 'enzyme';

import { BlockquoteVanilla } from '../Blockquote';
import defaultBlockquote from '../Blockquote.mock';

describe('<Blockquote />', () => {
  let BlockquoteComponent = '';
  beforeEach(() => {
    BlockquoteComponent = shallow(<BlockquoteVanilla {...defaultBlockquote} />);
  });
  it('should render blockquote', () => {
    expect(BlockquoteComponent.find('blockquote')).toBeTruthy();
  });
  it('should render content', () => {
    expect(BlockquoteComponent.find('p')).toBeTruthy();
  });
  it('check quoteContent value passed in', () => {
    expect(BlockquoteComponent.find('.content').text()).toBe(defaultBlockquote.quoteContent);
  });
  it('check quoteAuthor value passed in', () => {
    expect(BlockquoteComponent.find('.author').text()).toBe(defaultBlockquote.quoteAuthor);
  });
  it('should render author name', () => {
    expect(BlockquoteComponent.find('footer')).toBeTruthy();
  });
  test('should render correctly', () => {
    expect(BlockquoteComponent).toMatchSnapshot();
  });
});
