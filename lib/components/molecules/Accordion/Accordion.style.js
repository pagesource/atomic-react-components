import { css } from 'styled-components';

export default css`
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
  details {
    width: 100%;
    padding: 10px;
    background-color: #eee;
    summary {
      cursor: pointer;
      padding: 20px 0;
    }
    .accordion-panel-content {
      display: none;
      transition: 0.4s;
    }
    &:hover,
    &:active,
    &[open],
    &.active {
      background-color: #ccc;
    }
    &[open],
    &.active {
      .accordion-panel-content {
        display: block;
      }
    }
  }
`;
