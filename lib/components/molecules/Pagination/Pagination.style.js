import { css } from 'styled-components';

export default css`
  li {
    display: inline-block;
    margin: ${props => props.theme.spacing.unit1};
  }
  .active {
    ${props => props.theme.colors.CTA_SECONDARY};
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
