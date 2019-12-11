import { css } from 'styled-components';

export default css`
  width: 50%;
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
