import colors from './colors';
import fonts from './fonts';
import zIndex from './zIndex';
import dimension from './dimensions';

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
  linkColorPrimary: colors.LINK_PRIMARY,
  linkColorSecondary: colors.BG_SECONDARY_BUTTON,
  buttonBackgroundColorPrimary: colors.BG_PRIMARY_BUTTON,
  buttonBackgroundColorSecondary: colors.BG_SECONDARY_BUTTON,
  buttonColorPrimary: colors.WHITE,
  buttonColorSecondary: colors.WHITE,
  colorOutline: colors.OUTLINE,
  fieldBorderColor: colors.FIELD_BORDER,
  fieldBorderDisabledColor: colors.FIELD_BORDER_LIGHT,
  fieldBorderFocusColor: colors.FIELD_BORDER_FOCUS,
  fieldBorderErrorColor: colors.ERROR,
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

const themes = { zIndex, ...theme };
export default themes;
