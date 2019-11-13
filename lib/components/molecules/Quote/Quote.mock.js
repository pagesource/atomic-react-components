const defaultQuote = {
  className: 'quote',
  children: (
    <p>
      Be patient with yourself. Self-growth is tender.. it is holy ground. There is no greater
      investment. Be patient with yourself. Self-growth is tender.. it is holy ground. There is no
      greater investment.
    </p>
  ),
  contentSrc: 'https://blog.hubspot.com/sales/18-motivational-quotes-to-start-your-day-list',
  author: 'Stephen Covey',
  company: 'My company',
  contentStyle: {
    color: 'red',
  },
  markStyle: {
    'font-size': '60px;',
  },
  authorStyle: { color: 'blue' },
  quoteStyle: {},
};

const noAuthorQuote = {
  className: 'quote',
  children: (
    <p>
      Be patient with yourself. Self-growth is tender.. it is holy ground. There is no greater
      investment. Be patient with yourself. Self-growth is tender.. it is holy ground. There is no
      greater investment.
    </p>
  ),
  contentSrc: 'https://blog.hubspot.com/sales/18-motivational-quotes-to-start-your-day-list',
  company: 'My company',
  markStyle: {
    'font-size': '60px;',
  },
  contentStyle: {},
  authorStyle: {},
  quoteStyle: {},
};

const noCompanyQuote = {
  className: 'quote',
  children: (
    <p>
      Be patient with yourself. Self-growth istender.. it is holy ground. There is no greater
      investment. Be patient with yourself. Self-growth istender.. it is holy ground. There is no
      greater investment.
    </p>
  ),
  contentSrc: 'https://blog.hubspot.com/sales/18-motivational-quotes-to-start-your-day-list',
  author: 'Stephen Covey',
  markStyle: {
    'font-size': '60px;',
  },
  contentStyle: {},
  authorStyle: {},
  quoteStyle: {},
};

const noCompanyNoAuthorQuote = {
  className: 'quote',
  children: (
    <p>
      Be patient with yourself. Self-growth istender.. it is holy ground. There is no greater
      investment. Be patient with yourself. Self-growth istender.. it is holy ground. There is no
      greater investment.
    </p>
  ),
  contentSrc: 'https://blog.hubspot.com/sales/18-motivational-quotes-to-start-your-day-list',
  markStyle: {
    'font-size': '60px;',
  },
  contentStyle: {},
  authorStyle: {},
  quoteStyle: {},
};

const allFieldseparatorQuote = {
  className: 'quote',
  children: (
    <p>
      Be patient with yourself. Self-growth istender.. it is holy ground. There is no greater
      investment. Be patient with yourself. Self-growth istender.. it is holy ground. There is no
      greater investment.
    </p>
  ),
  contentSrc: 'https://blog.hubspot.com/sales/18-motivational-quotes-to-start-your-day-list',
  markStyle: {
    'font-size': '60px;',
  },
  contentStyle: {},
  authorStyle: {},
  quoteStyle: {},
  authorSeparator: '|',
  author: 'Stephen Covey',
  company: 'My company',
};

export {
  defaultQuote,
  noAuthorQuote,
  noCompanyQuote,
  noCompanyNoAuthorQuote,
  allFieldseparatorQuote,
};
