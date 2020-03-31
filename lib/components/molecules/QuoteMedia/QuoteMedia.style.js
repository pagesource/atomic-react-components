import { css } from 'styled-components';

const styles = css`
  .title,
  .media {
    ${(props) => `
      padding: ${props.theme.spacing.unit2};
    `};
  }
  .container {
    display: flex;
    flex-direction: ${(props) => (props.variation === 'stacked' ? 'column' : 'row')};
  }
  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
export default styles;
