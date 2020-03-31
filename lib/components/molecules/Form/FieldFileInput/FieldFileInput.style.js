import { css } from 'styled-components';

// TODO: Fix the duplicate styling in input.style.js
const styles = css`
  margin-bottom: ${(props) => props.theme.spacing.UNIT_2};
  ${(props) => `${props.theme.border.DRAG_FILE_FIELD}`};
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.UNIT_2};
  input {
    display: none;
  }
  label {
    display: none;
  }
`;

export default styles;
