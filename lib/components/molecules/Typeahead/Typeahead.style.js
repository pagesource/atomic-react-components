import { css } from 'styled-components';

export default css`
  input {
    width: 100%;
  }

  li {
    ${props => `
      ${props.theme.border.LIST_ITEM};
      ${props.theme.colors.LIST_ITEM};
    `};
  }

  button {
    text-align: left;
  }

  ul {
    ${props => `${props.theme.border.TYPEAHEAD_LIST};`};
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
