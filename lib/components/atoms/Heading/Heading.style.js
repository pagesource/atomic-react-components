import { css } from 'styled-components';

export default css`
  letter-spacing: 1px;
  font-weight: normal;
  ${props => props.theme.typography.FONT_DEFAULT};
  font-size: 20px;
  ${props => (props.HeadingType === 'h2' ? 'font-size: 18px;' : '')}
  ${props => (props.HeadingType === 'h3' ? 'font-size: 16px;' : '')}
  ${props => (props.HeadingType === 'h4' ? 'font-size: 14px;' : '')}
  ${props => (props.HeadingType === 'h5' ? 'font-size: 12px;' : '')}
  ${props => (props.HeadingType === 'h6' ? 'font-size: 10px;' : '')}
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
