import { css } from 'styled-components';

const ProgressIndicatorStyles = css`
  position: relative;
  width: 100vw;
  height: auto;
  margin: 5% auto 0;
  .progress-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  progress.bar {
    position: absolute;
    width: 100vw;
    height: 8px;
    z-index: 1;
  }
  /* stylelint-disable property-no-vendor-prefix */
  progress[value] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  progress[value]::-webkit-progress-value {
    background-color: var(--bg-cta-success);
  }
  .linear-bar {
    width: 100vw;
    height: 8px;
    position: absolute;
    background-color: var(--outline);
    margin: 0;
  }
  .linear-bar li {
    display: inline-block;
    width: ${(props) => `${`${100 / (!!props.children && props.children.length)}vw`}`};
  }
  .linear-bar li::before {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    background-color: var(--outline);
    border: 2px;
    position: absolute;
    border-radius: 50%;
    top: -0.4rem;
  }
  .linear-bar li:first-child::before {
    background-color: var(--success);
    left: -1px;
  }
  .linear-bar li.completed::before {
    background-color: var(--bg-cta-success);
    width: 0.8rem;
    height: 0.8rem;
    top: -0.2rem;
  }
  .linear-bar li.active::before {
    background-color: var(--bg-cta-success);
  }
  .linear-bar li span {
    width: 100%;
    display: inline-block;
    position: relative;
    margin-top: 1rem;
  }
  ${(props) =>
    props.variation === `bar` &&
    `
      progress.bar {
        height: 20px;
        bottom: -13.5px;
      }
      progress[value]::-webkit-progress-bar {
        background-color: transparent;
      }
      progress[value]::-moz-progress-bar {
        background-color: var(--bg-cta-success);
      }
      progress[value]::-webkit-progress-value::before {
        content: '80%';
        position: absolute;
        right: 0;
        top: -125%;
      }
      .linear-bar li {
        display: none;
      }
  `}
  ${(props) =>
    props.variation === `step` &&
    `
    progress.bar {
      top: 0;
      z-index: 0;
    }
    progress[value]::-webkit-progress-bar {
      background-color: var(--outline);
    }
    progress[value]::-moz-progress-bar {
      background-color: var(--outline);
    }
    .linear-bar {
      background-color: transparent;
    }
    progress.bar::after {
      content: 'checkout';
      width: 6rem;
      height: 1.6rem;
      border: 2px;
      background-color: var(--outline);
      position: absolute;
      border-radius: 10%;
      top: calc(100% - 1.15rem);
      text-align : center;
      right: 0;
    }
    progress.bar.completed::after {
      background-color: var(--bg-cta-success); 
    }
`}
  .progress-label {
    margin: 0 auto 10px;
    text-align: center;
  }
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default ProgressIndicatorStyles;
