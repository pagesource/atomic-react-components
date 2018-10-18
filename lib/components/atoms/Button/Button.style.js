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
    props.primary
      ? `
      background: ${props.theme.buttonBackgroundColorPrimary} ;
      color: ${props.theme.buttonColorPrimary};
      font-size: ${props.theme.fontSizeButtonPrimary};
      padding: 0 1rem;
    `
      : ''};
  ${props =>
    props.secondary
      ? `
      background: ${props.theme.buttonBackgroundColorSecondary} ;
      color: ${props.theme.buttonColorSecondary};
      font-size: ${props.theme.fontSizeButtonSecondary};
      padding: 0 1rem;
    `
      : ''};
  ${props =>
    props.fullWidth
      ? `
      width: 100% ;
    `
      : ''};

  &:focus {
    outline: 1px dashed ${props => props.theme.colorOutline};
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default ButtonStyles;
