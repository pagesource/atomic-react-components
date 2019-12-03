import { css } from 'styled-components';

const styles = css`
  position: relative;
  ${props => `
      padding: ${props.theme.spacing.unit1} ${props.theme.spacing.unit9};
    `};
  .content {
    ${props => `
        ${props.theme.typography.FONT_H2};
        padding: ${props.theme.spacing.unit1}
      `};
  }
  .author {
    text-align: right;
    ${props => `
      ${props.theme.typography.FONT_H3};
      padding: ${props.theme.spacing.unit1}
    `};
  }
  &:before {
    display: block;
    height: 0;
    content: '”';
    position: absolute;
    top: 0;
    ${props => `
      ${props.theme.typography.FONT_QUOTE};
      left: ${props.theme.spacing.unit2}
      color: ${props.theme.colors.TEXT_LIGHT}
    `};
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
export default styles;
