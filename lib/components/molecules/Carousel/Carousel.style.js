import { css } from 'styled-components';

export default css`
  display: flex;
  flex-direction: column;

  .carousel-section {
    overflow: hidden;
    flex: 0 0 100%;
  }

  .carousel-sliding-wrapper {
    display: flex;
    flex-flow: row nowrap;
    transition: transform ${props => props.slideAnimationTime / 1000}s;
  }

  .slide {
    padding: ${props => props.theme.spacing.UNIT_1};
    flex-grow: 0;
    flex-shrink: 0;
  }

  .carousel-dots {
    padding: ${props => props.theme.spacing.UNIT_1};
    margin: ${props => props.theme.spacing.UNIT_1};

    ul {
      display: flex;
      justify-content: center;
    }
  }

  .active {
    button {
      ${props => props.theme.border.FIELD_PRIMARY}
    }
  }

  &.legacy {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;

    .nav-action {
      flex: 0 0 30px;
    }

    .carousel-section,
    .carousel-dots {
      flex: 0 0 calc(100% - 83px);
    }
  }

  &.center-mode {
    .carousel-section {
      padding: 0 ${props => props.theme.spacing.UNIT_7};
    }

    .slide {
      padding: ${props => props.theme.spacing.UNIT_3};
    }

    .active {
      transform: scale(1.02);
    }
  }

  .thumbnail {
    background: transparent;
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
