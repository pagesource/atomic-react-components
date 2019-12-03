import { css } from 'styled-components';

// TODO: Fix the duplicate styling in input.style.js
const styles = css`
  margin-bottom: ${props => props.theme.spacing.unit2};
  ${props => `${props.theme.border.FF_FILE_FIELD}`};
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.unit2};
  input {
    display: none;
  }
`;

export default styles;
