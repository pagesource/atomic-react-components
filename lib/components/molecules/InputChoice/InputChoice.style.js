import { css } from 'styled-components';

const styles = css`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  > input {
    display: none;
  }
  > span {
    border: 2px solid
      ${props => (props.disabled ? props.theme.colors.CTA_DISABLED : props.theme.TEXT_INVERSE)};
    width: 20px;
    height: 20px;
    position: relative;
    display: inline-block;
    vertical-align: middle;

    ${props =>
      props.type === 'radio' &&
      `
      border-radius: 50%;
    `} &::after {
      content: '';
      width: 12px;
      height: 12px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      position: absolute;

      ${props =>
        props.type === 'checkbox' &&
        `
        height: 6px;
        border: 2px solid #fff;
        border-width: 0 0 2px 2px;
        top: calc(50% - 3px);
      `} ${props =>
        props.type === 'radio' &&
        `
        border-radius: 50%;
      `};
    }
  }
  & > input:checked + span {
    ${props =>
      props.type === 'radio'
        ? `border-color: ${
            props.disabled ? props.theme.colors.CTA_DISABLED : props.theme.TEXT_INVERSE
          };`
        : ''} ${props =>
      props.type === 'checkbox' &&
      `
      border-color: ${props.disabled ? props.theme.colors.CTA_DISABLED : props.theme.TEXT_INVERSE};
      background-color: ${
        props.disabled ? props.theme.colors.CTA_DISABLED : props.theme.TEXT_INVERSE
      };
      border-radius: 2px;
    `}

    &:after {
      ${props =>
        props.type === 'radio' &&
        `
        background-color: ${
          props.disabled ? props.theme.colors.CTA_DISABLED : props.theme.TEXT_INVERSE
        };
      `};
    }
  }

  ${props =>
    props.showLabelBeforeInput
      ? `
    display: flex;
    justify-content: space-between;
    & > span {
      order: 1;
    }
  `
      : `
    & > span {
      margin-right: 5px;
    }
  `};
`;

export default styles;
