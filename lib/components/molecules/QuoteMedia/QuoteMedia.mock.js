import Blockquote from '../Blockquote';
import defaultBlockquote from '../Blockquote/Blockquote.mock';

const defaultQuoteMedia = {
  HeadingType: 'h2',
  title: 'Inspirational Quotes',
  quoteContent: () => <Blockquote {...defaultBlockquote} />,
};

const stackedQuoteMedia = {
  HeadingType: 'h2',
  title: 'Inspirational Quotes',
  variation: 'stacked',
  quoteContent: () => <Blockquote {...defaultBlockquote} />,
};

export { defaultQuoteMedia, stackedQuoteMedia };
