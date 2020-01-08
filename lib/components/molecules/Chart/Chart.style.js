import { css } from 'styled-components';

export default css`
  height: 100vh;
  padding: 20px 0;

  .ct-series-a {
    .ct-bar {
      stroke: red;
    }
  }
  .ct-series-b {
    .ct-bar {
      stroke: yellow;
    }
  }
  .ct-series-c {
    .ct-bar {
      stroke: orange;
    }
  }
  .ct-labels {
    text-align: center;
  }

  .ct-vertical {
    &.ct-start {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      text-align: right;
      text-anchor: end;
      line-height: normal;
    }
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
