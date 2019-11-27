import { css } from 'styled-components';

const styles = css`
  & > * + * {
    margin-top: auto;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

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
