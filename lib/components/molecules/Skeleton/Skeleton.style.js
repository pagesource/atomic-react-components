import { css } from 'styled-components';

export default css`
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  div {
    display: inline-block;
    background: linear-gradient(-90deg, #ededed 0%, #e1e1e1 50%, #ededed 100%);
    background-size: 400% 400%;
    animation: pulse 1.2s ease-in-out infinite;
    &.circle {
      border-radius: 50%;
    }
  }
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
