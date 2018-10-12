import { css } from 'styled-components';

export const inputStyles = css`
  position: absolute;
  opacity: 0;
  label > span {
    &:after {
      content: none;
    }
  }
  &:checked + label > span {
    border-color: ${props => props.theme.brandPrimaryColor};
    background-color: ${props => props.theme.brandPrimaryColor};
    border-radius: 2px;
    &:after {
      content: "";
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
    width: 20px;
    height: 20px;
    position: relative;
    margin-right: 5px;

    &::after {
      content: "";
      width: 12px;
      height: 6px;
      border-left: 2px solid;
      border-bottom: 2px solid;
      border-color: #fff;
      left: 3px;
      top: 3px;
      transform: rotate(-45deg);
      position: absolute;
    }
  }
`;
