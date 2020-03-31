import { css } from 'styled-components';

export default css`
  .date-selector-field {
    display: inline-block;
    padding: 0 5px;
  }
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
