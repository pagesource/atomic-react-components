import { css } from 'styled-components';

// TODO: Fix the duplicate styling in input.style.js
const styles = css`
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing.UNIT_2};
  min-height: ${(props) => props.theme.spacing.UNIT_20};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing.UNIT_4};
  ${(props) => `${props.theme.border.DRAG_FILE_FIELD}`};
  ${(props) => `${props.theme.colors.TEXT_GREY}`};
  border-radius: 0.5rem;
  input {
    display: none;
  }
`;

export default styles;
