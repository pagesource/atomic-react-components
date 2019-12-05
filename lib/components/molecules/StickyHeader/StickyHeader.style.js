import styled, { css } from 'styled-components';

const styles = css`
  display: flex;
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export const StickyWrapper = styled.div`
  ${props =>
    props.isSticky &&
    `
          position: fixed;
          top: 0;
          ${props.theme.zIndex.zSticky};
          animation: ${props.theme.animations.ANIMATION_SLIDE_UP}
`}
`;

export default styles;
