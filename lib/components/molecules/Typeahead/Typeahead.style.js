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
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
