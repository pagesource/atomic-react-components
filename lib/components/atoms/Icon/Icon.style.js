import { css } from 'styled-components';

export default css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  .svg-icon-wrapper svg {
    width: ${props => (props.width ? props.width : '25px')};
    height: ${props => (props.height ? props.height : '25px')};
  }
  .svg-icon-wrapper svg rect,
  .svg-icon-wrapper svg path {
    fill: ${props => (props.color ? props.color : '#000')};
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
