import { css } from 'styled-components';

export default css`
  li {
    display: inline-block;
    margin: 5px 5px 0 0;
      /* margin: ${props => props.theme.spacing.unit2};*/
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
