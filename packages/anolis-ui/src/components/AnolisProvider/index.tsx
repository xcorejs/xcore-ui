import { defaultTheme, Preflight, ThemeProvider } from "@xstyled/emotion";
import ModalProvider from "components/Modal/ModalProvider";
import { Typography } from "components/Typography";
import { FC, useMemo } from "react";
import { emptyTheme, AnolisTheme } from "theme";

export type AnolisProviderProps = {
  theme?: AnolisTheme | null;
  xstyledTheme?: {};

  noPreflight?: boolean;
};

const AnolisProvider: FC<AnolisProviderProps> = ({ children, theme, xstyledTheme, noPreflight }) => {
  const mergedTheme = useMemo<any>(() => ({
    ...defaultTheme,
    ...xstyledTheme,
    colors: {
      ...defaultTheme.colors,
      "anolis-blue": "#0171b6"
    },
    fonts: {
      ...defaultTheme.fonts,
      // eslint-disable-next-line @typescript-eslint/quotes
      sans: `"rubik", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
    },
    anolis: theme ?? emptyTheme
  }), [theme, xstyledTheme]);

  return theme !== null
    ? (
      <ThemeProvider theme={mergedTheme}>
        {!noPreflight && <Preflight />}
        <Typography>
          <ModalProvider>{children}</ModalProvider>
        </Typography>
      </ThemeProvider>
    )
    : <ModalProvider>{children}</ModalProvider>;
};

export default AnolisProvider;