import { css } from 'styled-components';

export default css`
  padding: 10px 0;
  display: none;
  ${(props) => (props.isSelected ? `display: block;` : '')};
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
