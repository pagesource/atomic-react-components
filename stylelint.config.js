const strictRules = {
  'selector-max-specificity': [
    '0,3,0',
    {
      ignoreSelectors: [':global', ':local', ':focus', ':checked', ':after', ':before'],
      severity: 'warning',
    },
  ],
  'block-no-empty': true,
  'max-nesting-depth': 3,
  'declaration-colon-newline-after': null,
  'value-list-max-empty-lines': null,
  'font-family-no-missing-generic-family-keyword': null,
  'string-no-newline': null,
};

module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  rules: strictRules,
  syntax: 'scss',
};
