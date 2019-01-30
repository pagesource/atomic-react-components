import { css } from 'styled-components';

export default css`
  span {
    cursor: pointer;
    text-decoration: none;
  }
  .Popover-body {
    padding: 1rem;
    border: 1px solid;
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
