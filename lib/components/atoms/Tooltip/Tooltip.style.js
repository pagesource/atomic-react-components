import { css } from 'styled-components';

export default css`
  position: relative;
  .tooltip-trigger {
    display: inline-block;
    text-decoration: underline;
  }
  .tooltip-bubble {
    min-width: 120px;
    max-width: 210px;
    position: absolute;
    z-index: 10;
  }
  .tooltip-bubble::after {
    content: '';
    position: absolute;
  }
  .tooltip-top {
    bottom: 100%;
    left: 50%;
    padding-bottom: 9px;
    transform: translateX(-50%);
  }
  .tooltip-top::after {
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-top: 9px solid rgba(0, 0, 0, 0.7);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .tooltip-message {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 3px;
    color: #fff;
    font-size: 0.75rem;
    line-height: 1.4;
    padding: 0.75em;
    text-align: center;
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
