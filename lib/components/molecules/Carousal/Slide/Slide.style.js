import { css } from 'styled-components';

export default css`
  width: 100%;
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
