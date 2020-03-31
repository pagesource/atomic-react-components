import { css } from 'styled-components';

export default css`
  ${props => `margin: ${props.theme.spacing.UNIT_2} ${props.theme.spacing.UNIT_2};`};
  .search-box {
    display: flex;
    ${props => `
    border-radius: ${props.theme.spacing.UNIT_3};
    ${props.theme.border.FIELD_PRIMARY}
    `};
    width: 638px;
    margin: 0 auto;
    height: 50px;
  }

  .search-txt {
    display: inherit;
    flex: auto;
    flex-grow: 2;
    input {
      ${props => `font-size: ${props.theme.spacing.UNIT_2};`};
      flex-grow: 1;
      border: none;
      background: none;
      outline: none;
      line-height: 2;
    }
  }

  .search-button {
    display: flex;
    overflow: hidden;
  }

  button {
    ${props => `padding: 0 ${props.theme.spacing.UNIT_1};`};
    cursor: pointer;
    background: transparent;
  }

  button:hover {
    background-color: transparent;
  }

  .search-icon {
    ${props => `
    width: ${props.theme.spacing.UNIT_3};
    height: ${props.theme.spacing.UNIT_3};
    `};
    display: block;
  }

  .search-mic {
    background: url(images/googlemic.png) 0 0/24px no-repeat;
  }

  .search-loader {
    background: url(images/search-loader.gif) 0 0/24px no-repeat;
    ${props => ` height: ${props.theme.spacing.UNIT_1}; `};
  }

  .search-btn {
    background: url(images/search.svg) 0 0 no-repeat;
  }

  .search-txt ul {
    position: absolute;
    top: 65px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
    width: 638px;
    margin: 0 auto;
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
