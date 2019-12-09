import Blockquote from '../../atoms/Blockquote/Blockquote';

const defaultConfig = {
  className: 'blockquote-container',
  quoteClassName: 'blockquote',
  HeadingType: 'h2',
  title: 'Lorem ipsum dollor',
  quoteAuthorProp: 'Lorem ipsum',
  quoteContentProp: 'Lorem ipsum dollor sit amet',
  quoteContent: (quoteClassName, quoteAuthorProp, quoteContentProp) => (
    <Blockquote
      className={quoteClassName}
      quoteAuthorProp={quoteAuthorProp}
      quoteContentProp={quoteContentProp}
    />
  ),
};

export default defaultConfig;
