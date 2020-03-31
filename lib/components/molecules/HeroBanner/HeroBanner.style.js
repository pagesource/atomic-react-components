import { css } from 'styled-components';

const styles = css`
  .wrap {
    ${(props) => (props.variation === 'side-by-side' ? 'display: flex; flex: 1 1 auto;' : '')};
    ${(props) => (props.variation === 'positioned' ? 'position: relative' : '')};
  }

  .hero-content {
    ${(props) => props.theme.colors.HERO_CONTENT};
    text-align: center;
    ${(props) =>
      props.variation === 'positioned' ? 'position: absolute; top: 30%; left: 25%' : ''};
    padding: 20px;
  }

  ${(props) => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
