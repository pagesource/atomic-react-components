import { css } from 'styled-components';

export default css`
  width: ${props => props.totalSlides * 100}%;
  display: flex;
  transform: translateX(-${props => (100 / props.totalSlides) * props.currentSlideIndex}%);
  transition: 600ms linear;
`;
