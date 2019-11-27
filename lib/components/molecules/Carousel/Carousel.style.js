import { css, keyframes } from 'styled-components';

const fadeKeyFrame = keyframes`
  0% {opacity: 0;}
  100% {opacity: 100%;}
`;

export default css`
  display: flex;
  flex-direction: column;

  .carousel-section {
    display: flex;
  }

  .slide {
    flex: 0 0 100%;
    display: none;

    &.active {
      display: block;
      animation: ${fadeKeyFrame} ${props => props.slideTransitionTime / 1000}s linear;
    }
  }
  .carousel-dots {
    ul {
      display: flex;
      justify-content: center;
    }
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
