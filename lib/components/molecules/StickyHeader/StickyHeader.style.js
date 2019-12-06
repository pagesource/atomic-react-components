import styled, { css } from 'styled-components';

const styles = css`
  display: flex;
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
