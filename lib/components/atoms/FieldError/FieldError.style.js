import { css } from 'styled-components';

const commonStyles = css`
  font-family: ${props => props.theme.fontFamilySecondary};
  font-size: 12px;
  text-align: left;
  color: ${props => props.theme.textColorError};
  margin-bottom:10px;
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default commonStyles;
