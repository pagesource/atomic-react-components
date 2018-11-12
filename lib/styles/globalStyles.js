import Theme from './theme';

export default `
* {
  box-sizing: border-box;
}

body {
  font-family: ${Theme.fontFamilyDefault};
  font-size: ${Theme.fontSizeBase};
  font-weight: ${Theme.fontNormal};
  letter-spacing: ${Theme.letterSpacing}
  padding-top: ${Theme.minHeightHeaderMobile};
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}

/**
 *  Global Float Classes
 */
.right {
  float: right;
}

/**
 *  Global Align Classes
 */
.center-align{
  text-align: center;
}

/**
 *  Global Gutter Classes
 */
.margin-0 {
  margin: 0;
}

.no-gutters {
  margin: 0;
  padding: 0;
}

/**
 *  Global Input/CTA Classes
 */
button,
input,
optgroup,
select,
textarea {
  border-radius: 0;
  font-family: ${Theme.fontFamilyPrimary};
  letter-spacing: inherit;
  -webkit-appearance: none;
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
.is-hidden {
  display: none !important;
}

.is-visible {
  display: block;
}

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
