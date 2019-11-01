import { css } from 'styled-components';

export default css`
  padding: 10px;
  background-color: #000000;
  position: absolute;
  overflow: hidden;
  width: ${props => (props.maxWidth ? `${props.maxWidth}px` : '')};
  height: ${props => (props.maxHeight ? `${props.maxHeight}px` : '')};
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
  cursor: pointer;

  .overview {
    &__body {
      border: none;
      cursor: pointer;
      color: #fff;
      font-size: 12px;
    }
  }
`;
