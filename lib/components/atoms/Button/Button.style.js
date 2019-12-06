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
  ${props => props.fullWidth && ` width: 100% ;`};

  &:focus:not(.focus-visible) {
    outline: none;
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default ButtonStyles;
