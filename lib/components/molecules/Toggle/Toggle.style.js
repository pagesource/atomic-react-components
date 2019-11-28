import { css } from 'styled-components';

const styles = css`

  ${props => `
       ${props.theme.typography.FONT_DEFAULT};
`};
section{
  ${props => `
    padding-top: ${props.theme.spacing.unit1}
    `};
}
  label {
    position: relative;
    display: inline-block;
    ${props => `
      width: ${props.theme.spacing.unit8};
      height:${props.theme.spacing.unit4};
  `};
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  }

  label input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--grey);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    ${props => `
      width: ${props.theme.spacing.unit3};
      height:${props.theme.spacing.unit3};
      left: ${props.theme.spacing.unit1};
    `};
    bottom: 4px;
    background-color: var(--white);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--success);
  }

  input:checked + .slider:before {
    ${props => `
    webkit-transform: translateX(${props.theme.spacing.unit3});
    -ms-transform: translateX(${props.theme.spacing.unit3});
    transform: translateX(${props.theme.spacing.unit3});
    `};
    -
  }

  .slider.round {
    border-radius: var(--spacing-7);
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .toggleLabel{
    vertical-align : middle;
    ${props => `
    padding-left: ${props.theme.spacing.unit1}
    `};

  }
`;

export default styles;
