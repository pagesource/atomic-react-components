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
  }

  .search-txt {
    ${props => `font-size: ${props.theme.spacing.UNIT_2};`};
    border: none;
    background: none;
    outline: none;
    flex-grow: 1;
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

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
