import * as core from "./ui.mjs";

export function extendTheme(themeSheet) {
  const updatedThemes = {
    ...core,
    ...themeSheet,
  };
  return updatedThemes;
}
