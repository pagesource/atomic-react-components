import { css } from 'styled-components';

const styles = css`
  position: relative;
  ${props => `
      padding: ${props.theme.spacing.UNIT_2} ${props.theme.spacing.UNIT_9};
    `};
  p {
    ${props => `
        ${props.theme.typography.FONT_H2};
      `};
  }
  footer {
    text-align: right;
    ${props => `
      ${props.theme.typography.FONT_H3};
      padding: ${props.theme.spacing.UNIT_2};
    `};
  }
  &:before {
    display: block;
    height: 0;
    content: '”';
    position: absolute;
    top: ${props => `${props.theme.spacing.UNIT_1};`};
    ${props => `
      ${props.theme.typography.FONT_QUOTE_SIGN};
      left: ${props.theme.spacing.UNIT_2}
      color: ${props.theme.colors.TEXT_LIGHT}
    `};
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
export default styles;
