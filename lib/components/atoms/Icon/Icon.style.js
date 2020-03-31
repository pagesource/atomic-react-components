import { css } from 'styled-components';

export default css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .icon {
    background-image: url('/${(props) => props.theme.icons[props.id]}');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: ${(props) => (props.width ? props.width : '25px')};
    height: ${(props) => (props.height ? props.height : '25px')};
    display: inline-flex;
  }
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
