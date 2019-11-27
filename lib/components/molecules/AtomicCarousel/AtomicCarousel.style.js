import { css } from 'styled-components';

const styles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * + * {
    margin-top: auto;
  }

  & + .atomic-dots {
    & > ul {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
    }
  }
`;
export default styles;
