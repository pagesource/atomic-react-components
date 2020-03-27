import { css } from 'styled-components';

export default css`
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.borderColorSecondary};
  ${(props) =>
    props.isSelected ? `background-color: ${props.theme.backgroundColorSecondary}` : ``};
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
