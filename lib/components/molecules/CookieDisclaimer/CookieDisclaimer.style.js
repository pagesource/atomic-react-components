import { css } from 'styled-components';

const disclaimerStyles = css`
  display: flex;
  flex-flow: column;
  border: 1px solid grey;
  padding: ${props => props.theme.spacing.UNIT_4};
  animation: ${props => props.theme.animations.ANIMATE_DISCLAIMER};
  position: absolute;
  top: 2rem;
  left: 0;
  --webkit-backface-visibility: hidden;
  align-items: flex-end;
`;

export default disclaimerStyles;
