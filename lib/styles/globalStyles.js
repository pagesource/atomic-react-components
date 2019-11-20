import Theme from './theme';
import modernCSSReset from './modernCSSReset';

export default `

${modernCSSReset}

body {
  font-family: ${Theme.fontFamilyDefault};
  font-size: ${Theme.fontSizeBase};
  font-weight: ${Theme.fontNormal};
  letter-spacing: ${Theme.letterSpacing}
  padding-top: ${Theme.minHeightHeaderMobile};
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}

input[type=text]::-ms-clear {
  display: none;
}

@media (max-width: 767px){
  input,
  textarea{
    font-size: 16px;
  }
}

/**
 *  Global Visibility Classes
 */
.visually-hidden {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
}

.sr-only {
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
  top: auto;
  width: auto;
  height: 20px;
  overflow: hidden;
  &.no-focusable{
    width:1px;
    visibility:hidden;
    &:focus{
      outline:none;
      border:none;
    }
  }
}
`;
