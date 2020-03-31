import { css } from 'styled-components';

const ButtonStyles = css`
  border: none;
  border-radius: 0;
  position: relative;
  min-height: 48px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  ${props => `
      ${props.theme.colors.CTA_PRIMARY};
      ${props.theme.typography.FONT_CTA};
      padding: 0 ${props.theme.spacing.UNIT_2};
  `};
  ${props => props.secondary && `${props.theme.colors.CTA_SECONDARY}`};
  ${props =>
    props.tertiary
      ? `
    ${props.theme.colors.CTA_TERTIARY};
    ${props.theme.border.CTA_TERTIARY};
  `
      : ``};
  ${props =>
    props.variation === 'icon-only' &&
    `
    padding: 0 ${props.theme.spacing.UNIT_1};
    ${props.theme.colors.CTA_ICON}
  `}
  ${props => props.fullWidth && ` width: 100% ;`};
  ${props =>
    props.variation === 'bullets' &&
    `
      border-radius: 50%;
      text-indent: -1000px;
      overflow: hidden;
      width: 10px;
      height: 10px;
      padding: 0;
      min-height: initial;
      margin: ${props.theme.spacing.UNIT_1};
  }`}

  ${props =>
    props.transparent &&
    `
    ${props.theme.typography.FONT_CTA};
    ${props.theme.colors.CTA_TRANSPARENT}
  `};

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default ButtonStyles;
