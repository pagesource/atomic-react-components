import { css } from 'styled-components';

const styles = css`
  ${(props) => props.theme.typography.FONT_LABEL};
  ${(props) => props.theme.colors.TEXT_ERROR};
  text-align: left;
  margin: 0;

  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
