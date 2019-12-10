import Blockquote from '../../atoms/Blockquote/Blockquote';

const defaultQuoteMedia = {
  className: 'blockquote-container',
  quoteClassName: '',
  HeadingType: 'h2',
  title: 'Lorem ipsum dollor',
  quoteAuthorProp: 'Lorem ipsum',
  quoteProp: 'Lorem ipsum dollor sit amet',
  hasContent: false,
  quoteContent: (quoteClassName, quoteAuthorProp, quoteProp) => (
    <Blockquote
      className={quoteClassName}
      quoteAuthorProp={quoteAuthorProp}
      quoteProp={quoteProp}
    />
  ),
};

export default defaultQuoteMedia;
