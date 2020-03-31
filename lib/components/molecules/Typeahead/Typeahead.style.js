import { css } from 'styled-components';

export default css`
  input {
    width: 100%;
  }

  li {
    ${(props) => `
      ${props.theme.border.LIST_ITEM};
      ${props.theme.colors.LIST_ITEM};
    `};
  }

  button {
    text-align: left;
  }

  .initial-string {
    display: none;
  }

  ul {
    ${(props) => `
      ${props.theme.border.TYPEAHEAD_LIST};
      height: calc(48px * ${props.minItemsInList});
    `};
    overflow-y: scroll;
  }

  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
