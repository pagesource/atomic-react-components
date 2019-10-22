import { css } from 'styled-components';

export default css`
  position: absolute;
  ${props => (props.inheritedToolTipStyles ? props.inheritedToolTipStyles : '')};

  .tooltip {
    &__close {
      border: none;
      cursor: pointer;
      float: right;
    }
    &__body {
      padding: 10px;
    }

    ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
  }
`;
