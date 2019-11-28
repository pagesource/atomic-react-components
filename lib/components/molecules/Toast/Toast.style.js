import { css } from 'styled-components';

const ToastStyles = css`
  z-index: 1;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 0;
  position: relative;
  min-height: 80px;
  min-width: 400px;
  top: 30px;
  right: 30px;
  background-image: url('.../static/images/warning.png');
  ${props => `
    ${props.theme.colors.CTA_PRIMARY};
    ${props.theme.typography.FONT_DEFAULT};
    padding:0 ${props.theme.spacing.unit2};
  `};
  ${props =>
    props.variation === `info`
      ? `
    ${props.theme.colors.CTA_SECONDARY};
  `
      : ``};
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
  position: fixed;
  .toast_text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    ${props => `${props.theme.typography.FONT_H2}`};
  }
  .toast_close {
    position: absolute;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: var(--white);
    top: 10px;
    right: 20px;
    font-weight: bold;
    ${props => `${props.theme.typography.FONT_LINK}`};
  }
`;

export default ToastStyles;
