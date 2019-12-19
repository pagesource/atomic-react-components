import Blockquote from '../../atoms/Blockquote/Blockquote';

const defaultConfig = {
  className: 'blockquote-container',
  quoteClassName: 'blockquote',
  HeadingType: 'h2',
  title: 'Lorem ipsum dollor',
  quoteAuthorProp: 'Lorem ipsum',
  quoteProp: 'Lorem ipsum dollor sit amet',
  quoteContent: (quoteClassName, quoteAuthorProp, quoteProp) => (
    <Blockquote
      className={quoteClassName}
      quoteAuthorProp={quoteAuthorProp}
      quoteProp={quoteProp}
    />
  ),
};

export default defaultConfig;
