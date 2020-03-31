import { css } from 'styled-components';

export default css`
  .popover {
    border: 1px solid #000;

    &__close {
      border: none;
      cursor: pointer;
      float: right;
    }
  }

  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
