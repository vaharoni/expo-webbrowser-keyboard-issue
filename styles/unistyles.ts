import { StyleSheet } from "react-native-unistyles";
import { lightTheme } from "./theme-light";
import { breakpoints } from "./breakpoints";

// if you defined breakpoints
type AppBreakpoints = typeof breakpoints;

// if you defined themes
type AppThemes = {
  light: typeof lightTheme;
};

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

export function setupUnistyleRegistry() {
  StyleSheet.configure({
    settings: {
      initialTheme: "light",
    },
    breakpoints,
    themes: { light: lightTheme },
  });
}
