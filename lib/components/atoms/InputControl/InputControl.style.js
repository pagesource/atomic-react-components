import { css } from 'styled-components';

const styles = css`
  display: inline-block;
  > input {
    display: none;
  }

  > span {
    border: 2px solid ${props => (props.disabled ? props.theme.fieldBorderDisabledColor : props.theme.brandPrimaryColor)};
    width: 20px;
    height: 20px;
    position: relative;
    display: inline-block;
    vertical-align: middle;

    ${props => (props.type === 'radio' && `
      border-radius: 50%;
    `)}

    &::after {
      content: "";
      width: 12px;
      height: 12px;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%) rotate(-45deg);
      position: absolute;

      ${props => (props.type === 'checkbox' && `
        height: 6px;
        border: 2px solid #fff;
        border-width: 0 0 2px 2px;
        top: calc(50% - 3px);
      `)}

      ${props => (props.type === 'radio' && `
        border-radius: 50%;
      `)}
    }
  }

  & > input:checked + span {
    ${props => (props.type === 'radio' ? `border-color: ${props.disabled ? props.theme.fieldBorderDisabledColor : props.theme.brandPrimaryColor};` : '')}

    ${props => (props.type === 'checkbox' && `
      border-color: ${props.disabled ? props.theme.fieldBorderDisabledColor : props.theme.brandPrimaryColor};
      background-color: ${props.disabled ? props.theme.fieldBorderDisabledColor : props.theme.brandPrimaryColor};
      border-radius: 2px;
    `)}

    &:after {
      ${props => (props.type === 'radio' && `
        background-color: ${props.disabled ? props.theme.fieldBorderDisabledColor : props.theme.brandPrimaryColor};
      `)}
    }
  }
`;

export default styles;
