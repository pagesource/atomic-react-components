import { css } from 'styled-components';

export default css`
  li {
    display: inline-block;
    padding: ${props => props.theme.spacing.unit2};
    margin: ${props => props.theme.spacing.unit2};
  }
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
