import { css } from 'styled-components';

const styles = css`
  margin-bottom: ${(props) => props.theme.spacing.UNIT_1};

  label,
  input {
    display: block;
    margin-bottom: ${(props) => props.theme.spacing.HALF_UNIT};
  }
`;

export default styles;
