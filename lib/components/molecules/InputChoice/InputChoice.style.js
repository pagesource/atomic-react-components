import { css } from 'styled-components';

const styles = css`
  ${props => (props.disabled ? `cursor: default; ` : `cursor: pointer;`)};
  display: inline-flex;
  input {
    display: none;
  }
  > span {
    ${props => props.theme.border.FIELD_PRIMARY};
    ${props => (props.disabled ? props.theme.border.FIELD_DISABLED : '')};
    ${props => props.theme.dimensions.CHECKBOX};
    ${props => props.type === 'radio' && props.theme.border.FIELD_RADIO};
    position: relative;
    display: inline-block;
    vertical-align: middle;

    &::after {
      content: '';
      ${props => props.theme.dimensions.CHECKBOX};
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
      `};

      ${props =>
        props.type === 'radio' &&
        `
        ${props.theme.dimensions.FIELD_RADIO};
      `};
    }
  }
  & > input:checked + span {
    ${props =>
      props.disabled ? props.theme.border.FIELD_DISABLED : props.theme.border.FIELD_ACTIVE};

    &:after {
      ${props =>
        `background-color: ${
          props.disabled ? props.theme.colors.CTA_DISABLED : props.theme.colors.FIELD_ACTIVE
        };`};
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
