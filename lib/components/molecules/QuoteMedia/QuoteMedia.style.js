import { css } from 'styled-components';

const styles = css`
  .col-1-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .title {
    ${props => `
        ${props.theme.typography.FONT_H2};
        padding: ${props.theme.spacing.unit2};
    `};
    grid-column: 1/-1;
  }
  .media {
    ${props => `
        padding: ${props.theme.spacing.unit2};
  `};
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
export default styles;
