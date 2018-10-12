import { css } from 'styled-components';

export const inputStyles = css`
  position: absolute;
  opacity: 0;
  &:checked + label > span {
    &:after {
      background-color: ${props => props.theme.brandPrimaryColor};
    }
  }
  ${props => (props.disabled ? css`
    & + label > span {
      border-color: ${props.theme.fieldBorderDisabledColor};
    }
    & + label {
      cursor: default;
    }
  ` : css`
      &:focus + label > span,
      &:hover + label > span {
        border-color: ${props.theme.brandPrimaryColor};
      }
  `)}
`;

export const labelStyles = css`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  > span {
    border: 2px solid ${props => props.theme.colorOutline};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: relative;
    margin-right: 5px;

    &::after {
      content: "";
      width: 14px;
      height: 14px;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      position: absolute;
    }
  }
`;
