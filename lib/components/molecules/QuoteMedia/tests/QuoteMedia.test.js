import React from 'react';

import { shallowWithTheme } from '../../../../../__mock__/themeMock';
import { QuoteMediaVanilla } from '../QuoteMedia';
import { ImageVanilla } from '../../../atoms/Image';
import defaultImage from '../../../atoms/Image/Image.mock';
import { defaultQuoteMedia } from '../QuoteMedia.mock';

describe('<QuoteMedia />', () => {
  let QuoteMediaComponent = '';
  beforeEach(() => {
    QuoteMediaComponent = shallowWithTheme(
      <QuoteMediaVanilla {...defaultQuoteMedia}>
        <ImageVanilla {...defaultImage} />
      </QuoteMediaVanilla>
    );
  });
  it('Should have component heading being displayed', () => {
    expect(QuoteMediaComponent.find('h2')).toBeTruthy();
    expect(QuoteMediaComponent.find('.title').text()).toBe(defaultQuoteMedia.title);
  });
  it('Should allow quote component passing', () => {
    expect(QuoteMediaComponent.props().quoteContent).not.toBeNull();
    expect(QuoteMediaComponent.find('.container').find('Blockquote')).toBeTruthy();
  });
  it('Should render media Image in component body', () => {
    expect(QuoteMediaComponent.props().children[0]).not.toBeNull();
    expect(QuoteMediaComponent.find('.media')).toBeTruthy();
    expect(
      QuoteMediaComponent.find('.container')
        .find('.media')
        .find('Image')
    ).toBeTruthy();
  });
  test('Should render correctly', () => {
    expect(QuoteMediaComponent).toMatchSnapshot();
  });
});
