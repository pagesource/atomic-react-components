import { css } from 'styled-components';

export default css`
  border-spacing: ${(props) => props.theme.spacing.unit1};
  ${(props) => props.theme.border.FIELD_SECONDARY};
  th,
  td {
    margin: 0;
    padding: 0.5rem;
    ${(props) => props.theme.border.FIELD_SECONDARY};
  }
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
