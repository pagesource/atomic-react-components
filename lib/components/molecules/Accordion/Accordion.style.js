import { css } from 'styled-components';

export default css`

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
