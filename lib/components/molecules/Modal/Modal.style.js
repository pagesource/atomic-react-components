import { css } from 'styled-components';

const styles = css`
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
