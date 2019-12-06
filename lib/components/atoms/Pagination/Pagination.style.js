import { css } from 'styled-components';

export default css`
  li {
    display: inline-block;
    padding: ${props => props.theme.spacing.unit1};
    margin: ${props => props.theme.spacing.unit1};
    a {
      padding: ${props => props.theme.spacing.unit2};
      border: 1px solid ${props => props.theme.colors.LINK_PRIMARY};
      ${props => props.theme.behaviour.LINK_DECORATION};
      ${props => props.theme.colors.LINK_PRIMARY};
      ${props => props.theme.typography.FONT_LINK};
      &:focus {
        ${props => props.theme.border.CTA_OUTLINE};
        &:not(.focus-visible) {
          outline: none;
        }
      }
    }
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
