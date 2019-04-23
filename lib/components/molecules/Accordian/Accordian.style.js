import { css } from 'styled-components';

const styles = css`
  width: 50%;

  .accordian {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);

    &-item {
      cursor: pointer;
      padding: 10px;
      background: #e6e6ff;
      border-bottom: 1px solid #b3b3ff;
    }

    &-panel {
      padding: 10px;
    }
  }
`;
export default styles;
