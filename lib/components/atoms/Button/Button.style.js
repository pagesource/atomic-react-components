import { css } from 'styled-components';

const ButtonStyles = css`
  border: none;
  border-radius: 0;
  background: none;
  position: relative;
  min-height: 48px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? '0.3' : '1')};
  ${props =>
    (props.primary
      ? `
        background: ${props.theme.buttonBackgroundColorPrimary} ;
        color: ${props.theme.buttonColorPrimary};
        font-size: ${props.theme.fontSizeButtonPrimary};
        padding: 0 1rem;
      ` : '')};
  ${props =>
    (props.secondary
      ? `
        background: ${props.theme.buttonBackgroundColorSecondary} ;
        color: ${props.theme.buttonColorSecondary};
        font-size: ${props.theme.fontSizeButtonSecondary};
        padding: 0 1rem;
      ` : '')};
  ${props =>
    (props.fullWidth
      ? `
        width: 100% ;
      ` : '')};

  &:focus {
    outline: 1px dashed ${props => props.theme.colorOutline};
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 9px;
    transform: translateY(-50%);

    &.center-spinner {
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    div {
      height: 25px;
      width: 25px;
      top: 0;
    }
  }
`;

export default ButtonStyles;
