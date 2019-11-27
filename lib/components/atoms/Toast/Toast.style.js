import { css } from 'styled-components';

const ToastStyles = css`
  z-index: 1;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 0;
  position: relative;
  min-height: 80px;
  min-width: 300px;
  top: 30px;
  right: 30px;

  ${props => `
    ${props.theme.colors.CTA_PRIMARY};
    ${props.theme.typography.FONT_DEFAULT};
    ${props.theme.typography.FONT_H2};
    padding:0 ${props.theme.spacing.unit2};
  `};
  ${props =>
    props.secondary
      ? `
    ${props.theme.colors.CTA_SECONDARY};
    ${props.theme.border.FIELD_SECONDARY};
  `
      : ``};

  ${props =>
    props.tertiary
      ? `
    ${props.theme.colors.CTA_TERTIARY}
    ${props.theme.border.CTA_TERTIARY};
  `
      : ``};
  // &::before {
  //   content:"\f06a";
  // };
  // background-image:url('..');

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
  position: fixed;
`;

export default ToastStyles;
