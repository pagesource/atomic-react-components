import { css } from 'styled-components';

export default css`
  cursor: pointer;
  ${(props) => props.theme.behaviour.LINK_DECORATION};
  ${(props) => props.theme.colors.LINK_PRIMARY};
  ${(props) => props.theme.typography.FONT_LINK};
  &:focus {
    ${(props) => props.theme.border.CTA_OUTLINE};
    &:not(.focus-visible) {
      outline: none;
    }
  }
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
