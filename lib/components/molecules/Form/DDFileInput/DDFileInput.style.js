import { css } from 'styled-components';

// TODO: Fix the duplicate styling in input.style.js
const styles = css`
  margin-bottom: 0.75rem;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  color: rgb(187, 186, 187);
  border: 2px dashed rgb(187, 186, 186);
  border-radius: 0.5rem;
  input {
    display: none;
  }
`;

export default styles;
