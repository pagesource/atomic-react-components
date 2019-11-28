import { css } from 'styled-components';

const styles = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .title {
    ${props => `
        ${props.theme.typography.FONT_H2};
        padding: ${props.theme.spacing.unit2};
    `};
    grid-column: 1/-1;
  }

  .media {
    ${props => `
        padding: ${props.theme.spacing.unit2};
  `};
  }

  .blockquote {
    position: relative;
    ${props => `
      padding: ${props.theme.spacing.unit1} ${props.theme.spacing.unit9};
    `};
    &__content {
      ${props => `
        ${props.theme.typography.FONT_H2};
        padding: ${props.theme.spacing.unit1}
      `};
    }
    &__author {
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
      font-family: var(--font-family-display);
      line-height: 1;
      ${props => `
      left: ${props.theme.spacing.unit2}
      font-size: ${props.theme.spacing.unit16}
      color: ${props.theme.colors.TEXT_LIGHT}
    `};
    }
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
