import React from 'react';
import { shallow } from 'enzyme';

import { BlockquoteVanilla } from '../Blockquote';
import defaultConfig from '../Blockquote.mock';

describe('<Blockquote />', () => {
  let BlockquoteComponent = '';
  beforeEach(() => {
    BlockquoteComponent = shallow(<BlockquoteVanilla {...defaultConfig} />);
  });
  it('check props passed in', () => {
    expect(BlockquoteComponent.props().quoteContentProp).not.toBeNull();
  });
  it('should render blockquote', () => {
    expect(BlockquoteComponent.find('blockquote')).toBeTruthy();
  });
  it('should render content', () => {
    expect(BlockquoteComponent.find('p')).toBeTruthy();
  });
  it('should render author name', () => {
    expect(BlockquoteComponent.find('footer')).toBeTruthy();
  });

  test('should render correctly', () => {
    expect(BlockquoteComponent).toMatchSnapshot();
  });
});
