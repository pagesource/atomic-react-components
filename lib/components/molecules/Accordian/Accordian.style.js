import { css } from 'styled-components';

const styles = css`

.open,
  .closed {
    &:after {
      content: '-';
      color: red;
      float: left;
      font-weight: bold;
      padding-right: 5px;
    }
  }

  .closed {
    &:after {
      content: '+';
    }
  }

`;

export default styles;


