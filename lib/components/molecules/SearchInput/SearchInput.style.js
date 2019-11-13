import { css } from 'styled-components';

export default css`
  display: flex;
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
  .search__speech-btn {
    ${props => (props.speechButtonStyles ? props.speechButtonStyles : '')};
  }

  .search__search-btn {
    ${props => (props.searchButtonStyles ? props.searchButtonStyles : '')};
  }
`;
