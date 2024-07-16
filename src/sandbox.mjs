import { XloxBaseProvider } from "./@xlox/XloxBaseContext";
import { extendTheme } from "./@xlox/extendTheme.ts";

// import { XloxBaseProvider, extendTheme } from "@xlox/ui";
// import { colors, typography } from "./@xlox/ui.mjs";

const colorPalate = {
  primary: colors.pink[500],
  secondary: colors.pink[500],
  white: colors.pink[500],
  dark: colors.pink[500],
  info: colors.pink[500],
  success: colors.pink[500],
  danger: colors.pink[500],
};

const customConfig = {
  name: "Rakshith",
  ...colorPalate,
  // breakpoints: { base: 10 },
};

const theme = extendTheme({
  ...customConfig,
});

export default function App() {
  return (
    <XloxBaseProvider theme={theme}>
      <App />
    </XloxBaseProvider>
  );
}
