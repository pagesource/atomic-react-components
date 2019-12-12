import { css } from 'styled-components';

export default css`
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
  details {
    width: 100%;
    padding: 20px;
    background-color: #eee;
    summary {
      cursor: pointer;
      margin-bottom: 10px;
    }
    &:hover,
    &:active {
      background-color: #ccc;
    }
  }
`;
