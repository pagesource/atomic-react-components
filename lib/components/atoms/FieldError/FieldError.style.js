import { css } from 'styled-components';

const styles = css`
  font-family: ${props => props.theme.fontFamilySecondary};
  font-size: 12px;
  text-align: left;
  color: ${props => props.theme.textColorError};
  margin: 0;

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
