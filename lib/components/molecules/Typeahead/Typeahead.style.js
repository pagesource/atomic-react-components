import { css } from 'styled-components';

export default css`
  li {
    ${props => `
      ${props.theme.border.TypeAhead_LIST_ITEM};
      padding: ${props.theme.spacing.UNIT_1};
    `};
  }

  li:hover {
    cursor: pointer;
    color: blue;
  }

  .active {
    ${props => `
      ${props.theme.colors.TEXT_DEFAULT};
    `};
    color: blue;
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
