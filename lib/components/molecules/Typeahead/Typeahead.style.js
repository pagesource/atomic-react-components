import { css } from 'styled-components';

export default css`
  li {
    width: 150px;
    ${props => `
      ${props.theme.border.LIST_ITEM};
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
