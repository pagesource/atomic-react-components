import { css } from 'styled-components';

export default css`
	summary {
		cursor: pointer
	}
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
