import { css } from 'styled-components';

export default css`
  .carousel-section {
    display: flex;
  }

  .carousel-dots {
    ul {
      display: flex;
      justify-content: center;
    }

    button {
      border-radius: ${props => (props.square ? '0' : '0%')};
    }
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
