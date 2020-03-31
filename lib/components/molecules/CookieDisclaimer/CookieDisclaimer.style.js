import { css } from 'styled-components';

const disclaimerStyles = css`
  display: flex;
  flex-flow: column;
  border: 1px solid grey;
  padding: ${(props) => props.theme.spacing.UNIT_4};
  animation: ${(props) => props.theme.animations.ANIMATION_SLIDE_UP_LINEAR};
  position: absolute;
  top: 2rem;
  left: 0;
  --webkit-backface-visibility: hidden;
  align-items: flex-end;
  ul {
    list-style: none;
    display: flex;
    li:not(:last-child) {
      margin: 0 ${(props) => props.theme.spacing.UNIT_1} 0 0;
    }
  }
`;

export default disclaimerStyles;
