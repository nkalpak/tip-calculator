import * as ThemeUi from "theme-ui";

export const theme = {};

export function ThemeUiProvider({ children }) {
  return (
    <ThemeUi.ThemeProvider theme={theme}>{children}</ThemeUi.ThemeProvider>
  );
}
