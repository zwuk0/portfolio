import { colors, fonts } from "../config";

export const sharedPrefrence = {
  fonts: fonts,
};

export const lightTheme = {
  ...sharedPrefrence,
  color: colors.lightTheme,
};
export const darkTheme = {
  ...sharedPrefrence,
  color: colors.darkTheme,
};
