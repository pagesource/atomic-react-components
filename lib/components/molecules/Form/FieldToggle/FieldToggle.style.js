import { css } from 'styled-components';

const styles = css`
  ${props => `
       ${props.theme.typography.FONT_DEFAULT};
`};

  label {
    position: relative;
    display: inline-block;
    ${props => `
      width: ${props.theme.spacing.unit8};
      height:${props.theme.spacing.unit4};
  `};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }

  .slider {
    position: absolute;
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${props => `
      background-color: ${props.theme.colors.GREY_COLOR};
      border-radius: ${props.theme.spacing.unit2};
   `};
    ${props => `
          ${props.theme.animations.TOGGLE_TRANSITION};
    `};
  }

  .slider:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    ${props => `
      width: ${props.theme.spacing.unit3};
      height:${props.theme.spacing.unit3};
      left: ${props.theme.spacing.unit1};
    `};
    ${props => `
       ${props.theme.colors.BACKGROUND_WHITE};
       ${props.theme.animations.TOGGLE_TRANSITION};
    `};
    bottom: 4px;
  }

  input:checked + .slider {
    ${props => `
      background-color: ${props.theme.colors.SUCCESS_COLOR};
  `};
  }

  input:checked + .slider:before {
    ${props => `
       ${props.theme.animations.TOGGLE_SLIDE};
    `};
  }

  .toggleLabel {
    ${props => `
    padding-left: ${props.theme.spacing.unit1}
    `};
  }
`;

export default styles;
