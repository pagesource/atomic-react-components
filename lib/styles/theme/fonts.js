// @flow
type typography = { [key: string]: string | any };

const FALLBACK_FONT = 'Arial, Helvetica, sans-serif';
const PRIMARY_FONT = `${FALLBACK_FONT}`;
const SECONDARY_FONT = `${FALLBACK_FONT}`;
const ICON_FONT = '';
const BASE_FONT_SIZE = '16px';
const DEFAULT_FONT_SIZE = '12px';
const HIGHLIGHT_FONT_SIZE = '18px';
const PRIMARY_FONT_SIZE_BUTTON = '24px';
const SECONDARY_FONT_SIZE_BUTTON = '16px';
const LETTER_SPACING = '0px';
const FONT_NORMAL = 'normal';
const FONT_BOOK = '400';
const FONT_MEDIUM = '500';
const FONT_SEMI_BOLD = '600';
const FONT_BOLD = '700';
const BASE_LINE_HEIGHT = '1.5';

// Typography
export default ({
  FALLBACK_FONT,
  PRIMARY_FONT,
  SECONDARY_FONT,
  ICON_FONT,
  BASE_FONT_SIZE,
  DEFAULT_FONT_SIZE,
  LETTER_SPACING,
  FONT_NORMAL,
  FONT_BOOK,
  FONT_MEDIUM,
  FONT_SEMI_BOLD,
  FONT_BOLD,
  BASE_LINE_HEIGHT,
  PRIMARY_FONT_SIZE_BUTTON,
  SECONDARY_FONT_SIZE_BUTTON,
  HIGHLIGHT_FONT_SIZE,
}: typography);
