import { action } from '@storybook/addon-actions';

const defaultConfig = {
  onSpeechStart: action('On Speech Start fired'),
  onSpeechEnd: action('On Speech End fired'),
  onSearch: action('On Search fired'),
  inputProps: {
    onBlur: action('On Blur fired'),
    onChange: action('On Change fired'),
  },
  searchButtonProps: {
    children: 'Search',
  },
  speechButtonProps: {
    children: 'Speak',
  },
};

export const stylesConfig = {
  onSpeechStart: action('On Speech Start fired'),
  onSpeechEnd: action('On Speech End fired'),
  onSearch: action('On Search fired'),
  inheritedStyles: `border: 1px solid #dfe1e5;
  height: 39px;
  height: 44px;
  &.search--listening {
    border: solid 2px red;
  }`,
  inputProps: {
    onBlur: action('On Blur fired'),
    onChange: action('On Change fired'),
    inheritedStyles: `color: blue`,
  },
  searchButtonProps: {
    inheritedStyles: `background: url(images/search.svg) 0 0 no-repeat;
    background-size: 24px;
    height: 24px;
    width: 24px;
    vertical-align: middle;
    padding: 0;
    margin: 10px;`,
  },
  speechButtonProps: {
    inheritedStyles: `background: url(images/speech.png) 0 0 no-repeat;
    background-size: 24px;
    height: 24px;
    width: 24px;
    vertical-align: middle;
    padding: 0;
    margin: 10px;`,
  },
};

export default defaultConfig;
