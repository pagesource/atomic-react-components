import { css } from 'styled-components';

const ToastStyles = css`
  position: fixed;
  display: flex;
  align-items: center;
  min-height: 70px;
  min-width: 50vw;
  padding: 0 var(--spacing-3);
  .toast-loader {
    position: absolute;
    bottom: 0;
    height: 7px;
    left: 0;
    width: 100%;
    background-color: var(--white);
    opacity: 0.4;
    animation: dismiss-anim ${(props) => `${props.autoDismissTimeout / 1000}.5s`} ease-in-out;
  }
  ${(props) =>
    props.placement === `top-right`
      ? `top: 30px;right: 30px;animation: var(--animation-slide-left);`
      : ``};
  ${(props) => (props.variation === `info` ? `${props.theme.colors.CTA_INFO};` : ``)};
  ${(props) => (props.variation === `warning` ? `${props.theme.colors.CTA_WARNING};` : ``)};
  ${(props) => (props.variation === `success` ? `${props.theme.colors.CTA_SUCCESS};` : ``)};
  ${(props) => (props.variation === `error` ? `${props.theme.colors.CTA_ERROR};` : ``)};
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
  .toast-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props) => `${props.theme.typography.FONT_TOAST}`};
  }
  .toast-text .icon-wrapper {
    padding-right: 0.8em;
  }
  .toast-close {
    position: absolute;
    cursor: pointer;
    top: 12px;
    right: 12px;
    background-color: transparent;
    border: none;
  }
  @keyframes dismiss-anim {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
  @media (min-width: 768px) {
    min-width: 30vw;
  }
`;
export default ToastStyles;
