import { css } from 'styled-components';

export default css`
${props => `
width: ${props.width};
`};
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
