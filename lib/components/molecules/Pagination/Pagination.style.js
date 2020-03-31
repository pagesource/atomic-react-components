import { css } from 'styled-components';

export default css`
  li {
    display: inline-block;
    margin: 0.125rem;
    border: ${(props) => props.theme.border.LIST_ITEM};
  }
  .active {
    ${(props) => props.theme.colors.CTA_SECONDARY};
  }
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
