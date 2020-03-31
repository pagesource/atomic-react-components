import { css } from 'styled-components';

const styles = css`
  ${(props) => `
       ${props.theme.typography.FONT_DEFAULT};
       padding-bottom: ${props.theme.spacing.UNIT_3}
`};

  label {
    position: relative;
    display: inline-block;
    ${(props) => `
      width: ${props.theme.spacing.UNIT_8};
      height:${props.theme.spacing.UNIT_4};
  `};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }

  .slider {
    position: absolute;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${(props) => `
      ${props.theme.colors.TOGGLE_SWITCH_INACTIVE};
      border-radius: ${props.theme.spacing.UNIT_2};
   `};
    ${(props) => `
          ${props.theme.animations.TOGGLE_TRANSITION};
    `};
  }

  .slider:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    ${(props) => `
      width: ${props.theme.spacing.UNIT_3};
      height:${props.theme.spacing.UNIT_3};
      left: ${props.theme.spacing.UNIT_1};
    `};
    ${(props) => `
       ${props.theme.colors.CTA_TAB};
       ${props.theme.animations.TOGGLE_TRANSITION};
    `};
    bottom: 4px;
  }

  input:checked + .slider {
    ${(props) => `
        ${props.theme.colors.TOGGLE_SWITCH};
    `};
  }

  input:checked + .slider:before {
    ${(props) => `
       ${props.theme.animations.TOGGLE_SLIDE};
    `};
  }

  .toggle-label {
    ${(props) => `
    padding-left: ${props.theme.spacing.UNIT_1}
    `};
  }

  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
