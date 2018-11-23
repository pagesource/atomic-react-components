import { css } from 'styled-components';

export default css`
  text-align: center;
  .dot {
    width: 10px;
    height: 10px;
    min-height: 10px;
    border-radius: 50%;
    border: 1px solid;
    margin-right: 10px;
    padding: 0;
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
