import {StyleSheet, Dimensions, PixelRatio} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const colors = {
  BG: '#F5F5F5',
  TEXT_TITLE: '#192D45DE',
  ORANGE: '#FF6900',
  INACTIVE_TEXT: '#9E9E9E',
  SECOND_BTN: '#EEEEEE',
  BLACK: '#000000',
  BLACK21: '#212121',
  WHITE: '#FFFFFF',
  BORDER_GRAY: '#E0E0E0',
  BG2: '#F4F4F4',
  SLIDE_COLOR: '#D0D0D0',
  GREEEN: '#45B828',
  YELLOW: '#FFC107',
  REDD: '#FF3D00',
  REQUIRED_ERROR: '#E54141',
  REQUIRED_BACKGROUND: '#FFE2E2',
  GREY_DARK_TEXT: '#8F8F8F',
  GREEN_AFISHA: '#168D25',
  GRAY_CYRCLE: '#A7A7A7',
  GREY_DARK: '#8F8F8F',
  PRIMARY_LIGHT: '#FFEDE0',
  INCOME_COLOR: '#58BF68',
  REFUND_COLOR: '#F87171',
  GRAY: '#D9D9D9',
  GRAY_INDICATOR: '#C9C9C9',
  RED: '#FF0000',
  NO_NAME_FFF6C7: '#FFF6C7',
  NO_NAME_B58200: '#B58200',
  GREEEN_STATUS: '#58BF68',
  GRAY_BG: '#F1F1F1',
  GREEN_LIGHT: '#D9F8DD',
  GREEN_ORDER: '#428C4B',
  RED_LIGHT: '#FFE3E3',
  BLUE: '#0075FF',
};

export const fonts = {
  100: 'SF-Pro-Display-Thin',
  300: 'SF-Pro-Display-Light',
  400: 'SF-Pro-Display-Regular',
  500: 'SF-Pro-Display-Medium',
  700: 'SF-Pro-Display-SemiBold',
  800: 'SF-Pro-Display-Bold',
  900: 'SF-Pro-Display-Black',
};

export const normalize = (size: number): any => {
  return size / PixelRatio.getFontScale();
};

export const stylesConst = StyleSheet.create({
  shadow: {
    elevation: 1,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  text_title_32: {
    fontSize: normalize(32),
    fontFamily: fonts[500],
    color: colors.TEXT_TITLE,
  },
  text_title_22: {
    fontSize: normalize(22),
    fontFamily: fonts[500],
    color: colors.TEXT_TITLE,
  },
  text_title_20: {
    fontSize: normalize(20),
    fontFamily: fonts[500],
    color: colors.TEXT_TITLE,
  },
  text_20m: {
    fontSize: normalize(20),
    fontFamily: fonts[800],
    color: colors.TEXT_TITLE,
  },
  text_title_24: {
    fontSize: normalize(24),
    fontFamily: fonts[500],
    color: colors.TEXT_TITLE,
  },
  text_title_24_r: {
    fontSize: normalize(24),
    fontFamily: fonts[400],
    color: colors.TEXT_TITLE,
  },
  text_title_18: {
    fontSize: normalize(18),
    fontFamily: fonts[500],
    color: colors.TEXT_TITLE,
  },
  text_18s: {
    fontSize: normalize(18),
    fontFamily: fonts[300],
    color: colors.TEXT_TITLE,
  },
  text_18m: {
    fontSize: normalize(18),
    fontFamily: fonts[500],
    color: colors.INACTIVE_TEXT,
  },
  text_18b: {
    fontSize: normalize(18),
    fontFamily: fonts[800],
    color: colors.INACTIVE_TEXT,
  },
  text_16m: {
    fontSize: normalize(16),
    fontFamily: fonts[500],
    color: colors.INACTIVE_TEXT,
  },
  text_16s: {
    fontSize: normalize(16),
    fontFamily: fonts[300],
    color: colors.INACTIVE_TEXT,
  },
  text_14m: {
    fontSize: normalize(14),
    fontFamily: fonts[500],
    color: colors.INACTIVE_TEXT,
  },
  text_14r: {
    fontSize: normalize(14),
    fontFamily: fonts[400],
    color: colors.INACTIVE_TEXT,
  },
  text_12m: {
    fontSize: normalize(12),
    fontFamily: fonts[500],
    color: colors.INACTIVE_TEXT,
  },
  text_12r: {
    fontSize: normalize(12),
    fontFamily: fonts[400],
    color: colors.TEXT_TITLE,
  },
  text_18r: {
    fontSize: normalize(18),
    fontFamily: fonts[400],
    color: colors.INACTIVE_TEXT,
  },
  text_16r: {
    fontSize: normalize(16),
    fontFamily: fonts[400],
    color: colors.INACTIVE_TEXT,
  },
  text_16_white: {
    fontSize: normalize(16),
    fontFamily: fonts[400],
    color: colors.WHITE,
  },
  text_16_orange: {
    fontSize: normalize(16),
    fontFamily: fonts[400],
    color: colors.ORANGE,
  },
  btn_r10: {
    backgroundColor: colors.ORANGE,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 12,
  },
  btn_gray_r12: {
    backgroundColor: colors.SECOND_BTN,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  btn_r10_2: {
    backgroundColor: colors.WHITE,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.ORANGE,
  },
  btn_r6_p6: {
    borderRadius: 6,
    backgroundColor: colors.ORANGE,
    paddingVertical: 12,
    alignItems: 'center',
  },
  input_6: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.BORDER_GRAY,
    paddingLeft: 16,
    color: colors.INACTIVE_TEXT,
    paddingVertical: 8,
    fontSize: normalize(16),
    fontFamily: fonts[300],
  },
  input_6_readonly: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.BORDER_GRAY,
    paddingLeft: 16,
    color: colors.INACTIVE_TEXT,
    paddingVertical: 8,
    fontSize: normalize(16),
    fontFamily: fonts[300],
    backgroundColor: colors.BORDER_GRAY,
  },
  input_6_hover: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.ORANGE,
    paddingLeft: 16,
    color: colors.BLACK,
    paddingVertical: 8,
    fontSize: normalize(16),
    fontFamily: fonts[300],
  },
  input_6_multiline: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.BORDER_GRAY,
    paddingLeft: 16,
    color: colors.INACTIVE_TEXT,
    textAlignVertical: 'top',
    paddingVertical: 10,
    fontSize: normalize(16),
    fontFamily: fonts[300],
  },
  input_6_multiline_hover: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.ORANGE,
    paddingLeft: 16,
    color: colors.BLACK,
    textAlignVertical: 'top',
    paddingVertical: 10,
    fontSize: normalize(16),
    fontFamily: fonts[300],
  },
  btn_gray_r6_p6: {
    borderRadius: 6,
    backgroundColor: colors.SECOND_BTN,
    paddingVertical: 12,
    alignItems: 'center',
  },
  btn_gray_r6_p10: {
    borderRadius: 6,
    backgroundColor: colors.SECOND_BTN,
    paddingVertical: 12,
    alignItems: 'center',
  },
  btn_gray_r10_p15: {
    borderRadius: 16,
    backgroundColor: colors.SECOND_BTN,
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  btn_r10_p15: {
    borderRadius: 16,
    backgroundColor: colors.ORANGE,
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  btn_r6_p10: {
    borderRadius: 6,
    backgroundColor: colors.ORANGE,
    paddingVertical: 12,
    alignItems: 'center',
  },
  text_gray: {
    fontSize: normalize(16),
    fontFamily: fonts[300],
    lineHeight: 20,
    color: colors.INACTIVE_TEXT,
  },
  text16: {
    fontSize: normalize(16),
    color: colors.TEXT_TITLE,
    fontFamily: fonts[400],
  },
  text16_t: {
    fontSize: normalize(16),
    color: colors.TEXT_TITLE,
    fontFamily: fonts[500],
  },
  viewInput: {
    paddingLeft: 16,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.BORDER_GRAY,
  },
  container: {
    flex: 1,
    backgroundColor: colors.BG,
    padding: 20,
  },
  container_r10: {
    flex: 1,
    backgroundColor: colors.BG,
    padding: 20,
    borderRadius: 8,
  },
  text_btn_white: {
    color: colors.WHITE,
    fontSize: normalize(16),
    fontFamily: fonts[400],
  },
  text_btn_black: {
    color: colors.BLACK,
    fontSize: normalize(16),
    fontFamily: fonts[400],
  },
  second_container: {
    padding: 16,
    gap: 16,
    backgroundColor: colors.WHITE,
    borderRadius: 8,
  },
  second_container2: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 16,
    backgroundColor: colors.WHITE,
    borderRadius: 16,
  },
  border_line: {
    borderColor: colors.BORDER_GRAY,
    borderBottomWidth: 1,
  },
  fetching: {
    flex: 1,
    position: 'absolute',
    backgroundColor: colors.WHITE + 'CC',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  tooltipContainer: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  error: {
    fontSize: normalize(12),
    fontFamily: fonts[400],

    color: colors.REQUIRED_ERROR,
    marginTop: 8,
  },
});
