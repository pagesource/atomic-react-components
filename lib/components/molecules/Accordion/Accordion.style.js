import { css } from 'styled-components';

export default css`
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
  details {
    width: 100%;
    padding: 10px;
    background-color: #eee;
    summary {
      cursor: pointer;
      padding: 20px 0;
    }
    &:hover,
    &:active,
    &[open] {
      background-color: #ccc;
    }
  }
`;
