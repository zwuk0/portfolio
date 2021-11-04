import { colors, fonts, breakpoints } from "../config";

export const sharedPrefrence = {
  fonts: fonts,
  breakpoints: breakpoints,
};

export const lightTheme = {
  ...sharedPrefrence,
  color: colors.lightTheme,
};
export const darkTheme = {
  ...sharedPrefrence,
  color: colors.darkTheme,
};
