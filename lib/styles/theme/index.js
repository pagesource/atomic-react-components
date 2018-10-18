import colors from './colors';
import fonts from './fonts';
import zIndex from './zIndex';
import dimension from './dimensions';

import { field, cta } from './elements';

const theme = {
  brandPrimaryColor: colors.BRAND_PRIMARY,
  textColorPrimary: colors.TEXT_PRIMARY,
  textColorSecondary: colors.TEXT_ALTERNATE,
  textColorSecondaryLight: colors.TEXT_ALTERNATE_LIGHT,
  textColorPlaceholder: colors.TEXT_LIGHT,
  textColorBrandPrimary: colors.BRAND_PRIMARY,
  textColorError: colors.ERROR,
  textColorSuccess: colors.SUCCESS,
  backgroundColorPrimary: colors.BG_PRIMARY,
  backgroundColorSecondary: colors.BG_SECONDARY,
  borderColorBoldest: colors.ERROR,
  borderColorSecondary: colors.BORDER_SECONDARY,
  colorOutline: colors.OUTLINE,
  backgroundColorSuccess: colors.SUCCESS,
  containerShadowPrimary: colors.CONTAINER_SHADOW_PRIMARY,
  fontFamilyDefault: fonts.FALLBACK_FONT,
  fontFamilyPrimary: fonts.PRIMARY_FONT,
  fontFamilySecondary: fonts.SECONDARY_FONT,
  fontFamilyIcon: fonts.ICON_FONT,
  fontSizeBase: fonts.BASE_FONT_SIZE,
  fontSizeDefault: fonts.DEFAULT_FONT_SIZE,
  fontSizeHighlight: fonts.HIGHLIGHT_FONT_SIZE,
  fontSizeButtonPrimary: fonts.PRIMARY_FONT_SIZE_BUTTON,
  fontSizeButtonSecondary: fonts.SECONDARY_FONT_SIZE_BUTTON,
  fontNormal: fonts.FONT_NORMAL,
  fontBook: fonts.FONT_BOOK,
  fontMedium: fonts.FONT_MEDIUM,
  fontSemiBold: fonts.FONT_SEMI_BOLD,
  fontBold: fonts.FONT_BOLD,
  letterSpacing: fonts.LETTER_SPACING,
  lineHeightBase: fonts.BASE_LINE_HEIGHT,
  maxWidthPageContent: dimension.PAGE_CONTENT_MAX_WIDTH,
};

const themes = {
  zIndex,
  ...field,
  ...cta,
  ...theme,
};
export default themes;
