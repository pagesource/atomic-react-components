const unorderedList = {
  ListType: 'ul',
  className: 'example',
};

const inlineBorderSeparatedUnorderedList = {
  ListType: 'ul',
  inline: true,
  borderSeparator: true,
  noDefaultView: true,
};

const nestedUnorderedList = {
  ListType: 'ul',
  nested: true,
  noDefaultView: true,
};

const orderedList = {
  ListType: 'ol',
};

export { unorderedList, orderedList, nestedUnorderedList, inlineBorderSeparatedUnorderedList };
