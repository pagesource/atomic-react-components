import { css } from 'styled-components';

const styles = css`
    height: auto;
    background: ${props => (props.theme.fieldBackgroundColor)};
    border: 1px solid ${props => (props.theme.fieldBorderColor)};
    border-radius: 0.2rem;
    padding: 0.6rem 1rem;
    color: ${props => (props.theme.fieldTextColor)};


    /* Disabled*/
    ${props => (props.disabled ? `
      background: ${props.theme.fieldBackgroundDisabledColor};
      border-color: ${props.theme.fieldBorderDisabledColor};
    ` : '')};

    ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
