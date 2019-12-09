import { css } from 'styled-components';

const ToastStyles = css`
  position: fixed;
  display: flex;
  align-items: center;
  min-height: 80px;
  min-width: 400px;
  padding:0 var(--spacing-3);
  .toast-loader {
    position: absolute;
    bottom: 0;
    height: 7px;
    left: 0;
    width:100%;
    background-color:var(--white);
    opacity:0.4;
  }
  ${props => props.placement === `top-left`? `top: 30px;left: 30px;animation: var(--animation-slide-right);` :  ``};
  ${props => props.placement === `top-right`? `top: 30px;right: 30px;animation: var(--animation-slide-bottom);` :  ``};
  ${props => props.placement === `bottom-left`? `bottom: 30px;left: 30px;` :  ``};
  ${props => props.placement === `bottom-right`? `bottom: 30px;right: 30px;animation: var(--animation-slide-left);` :  ``};
  ${props => props.placement === `center-center`? `top: calc(50% - 40px);left: calc(50% - 200px);animation: var(--animation-slide-up);` :  ``};
  ${props => props.placement === `top-center`? `top: 30px;left: calc(50% - 200px);` :  ``};
  ${props => props.placement === `bottom-center`? `bottom: 30px;left: calc(50% - 200px);` :  ``};
  ${props => props.placement === `left-center`? `left: 30px;top: calc(50% - 40px);` :  ``};
  ${props => props.placement === `right-center`? `right: 30px;top: calc(50% - 40px);animation: var(--animation-slide-left);` :  ``};
  ${props => props.variation === `default`? `${props.theme.colors.CTA_DEFAULT};`: ``};
  ${props => props.variation === `info`? `${props.theme.colors.CTA_INFO};`: ``};
  ${props => props.variation === `warning`? `${props.theme.colors.CTA_WARNING};`: ``};
  ${props => props.variation === `success`? `${props.theme.colors.CTA_SUCCESS};`: ``};
  ${props => props.variation === `error`? `${props.theme.colors.CTA_ERROR};`: ``};
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
  .toast-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    ${props => `${props.theme.typography.FONT_H2}`};
  }
  .toast-close {
    position: absolute;
    cursor: pointer;
    top: 12px;
    right: 12px;
    background-color:transparent;
    border: none;
  }
 .toast-dismiss{
  animation: dismiss-anim  ${props => `${props.autoDismissTimeout/1000}s`} ease-in-out;
    -webkit-animation: dismiss-anim ${props => `${props.autoDismissTimeout/1000}s`} ease-in-out;
 }
 @keyframes dismiss-anim {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}

`;

export default ToastStyles;
