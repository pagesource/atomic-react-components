import { css } from 'styled-components';

const styles = css`
  margin-bottom: ${props => props.theme.spacing.unit1};

  label,
  textarea {
    display: block;
    margin-bottom: ${props => props.theme.spacing.halfUnit};
  }
`;

export default styles;
