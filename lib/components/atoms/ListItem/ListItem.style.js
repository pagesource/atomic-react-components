import { css } from 'styled-components';

export default css`
  margin: 10px;
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
