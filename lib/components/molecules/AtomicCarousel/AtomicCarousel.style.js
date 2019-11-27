import { css, keyframes } from 'styled-components';

const fadeOut = keyframes`
0% { opacity: 100%;}
100% { opacity: 0%; }
`;

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  button {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

    &:focus {
      outline: rgba(0, 0, 0, 0.9) dashed 1px;
    }
  }

  .carousel-heading {
    margin: 10px 0;
    ${props => props.theme.typography.FONT_H2}
  }

  .carousel-container {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .atomic-dots {
    margin: 10px 0;

    & > ul {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;

      li {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: 4px;
        border: ${props => props.theme.border.FIELD_SECONDARY};
        ${props => `
          ${props.theme.colors.CTA_PRIMARY};
        `};
      }
    }

    button {
      background: transparent;
      border: none;
      box-shadow: none;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      text-indent: -1000px;
      overflow: hidden;
      padding: 0;
    }
  }

  button[data-action] {
    background: transparent;
    position: absolute;
    bottom: 0;
    top: 0;
    border: none;
    ${props => props.theme.colors.CTA_TERTIARY};
    opacity: 0.4;
    padding: 10px;

    &.navigation-image {
      text-indent: -1000px;
      overflow: hidden;
      min-width: 40px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    &.next {
      right: 0;
    }

    &.next-icon {
      background-image: url('${props =>
        props.nextIcon ? props.nextIcon : props.theme.icons.rightArrow}');
    }

    &.prev {
      left: 0;
    }

    &.prev-icon {
      left: 0;
      background-image: url('${props =>
        props.prevIcon ? props.prevIcon : props.theme.icons.leftArrow}');
    }
  }

  .fade-out {
    animation: ${fadeOut} 2s ease;
  }

  .carousel-slides {
    display: flex;

    .slide-item {
      padding: 0 2px;
      flex: 0 0 ${props => 100 / props.perSlideFrame}%;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }

  .hidden {
    display: none;
  }

  .animation-btn-icon {
    background-color: transparent;
    background-size: contain;
    border: none;
    width: 15px;
    height: 15px;
    text-indent: -100px;
    overflow: hidden;

    &.play {
      background-image: url('${props =>
        props.playIcon ? props.playIcon : props.theme.icons.playIcon}');
    }

    &.stop {
      background-image: url('${props =>
        props.pauseIcon ? props.pauseIcon : props.theme.icons.pauseIcon}');
    }
  }
`;

export default styles;
