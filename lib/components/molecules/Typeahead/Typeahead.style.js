import { css } from 'styled-components';

export default css`
  li {
    width: 179px;
    ${props => `
      ${props.theme.border.LIST_ITEM};
    `};
    padding: 0.5rem;
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
