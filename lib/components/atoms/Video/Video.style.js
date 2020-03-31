import { css } from 'styled-components';

export default css`
  ${(props) => `
width: ${props.width ? props.width : '100%'};
`};
`;
