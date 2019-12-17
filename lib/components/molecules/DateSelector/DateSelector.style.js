import { css } from 'styled-components';

export default css`
  label {
    display: ${props => (props.showLabel ? 'inline' : 'none')};
    padding: 0 5px;
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
