import { css } from 'styled-components';

const imageStyles = css`
  max-width: 100%;
  height: auto;
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default imageStyles;
