import { css } from 'styled-components';

export default css`
  ${props => {
    switch (props.HeadingType) {
      case 'h1':
        return props.theme.typography.FONT_H1;
      case 'h2':
        return props.theme.typography.FONT_H2;
      case 'h3':
        return props.theme.typography.FONT_H3;
      case 'h4':
        return props.theme.typography.FONT_H4;
      default:
        return props.theme.typography.FONT_DEFAULT;
    }
  }};
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
