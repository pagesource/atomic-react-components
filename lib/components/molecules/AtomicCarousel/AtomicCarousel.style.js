import { css } from 'styled-components';

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  .carousel-container {
    display: flex;
    align-items: center;
  }

  .atomic-dots {
    ul {
      display: flex;
    }
  }

  .carousel-slides {
    .slide-item {
      flex: 0 0 ${props => 100 / props.perSlideFrame}%;
    }
  }
`;

export default styles;
