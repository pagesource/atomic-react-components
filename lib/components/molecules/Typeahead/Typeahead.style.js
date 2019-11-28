import { css } from 'styled-components';

export default css`
  li {
    width: 150px;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
    border-bottom: 1px solid #999;
  }

  li:hover {
    cursor: pointer;
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
