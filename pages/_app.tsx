import type { AppProps } from "next/app";
import { theme } from "theme";

import { ThemeProvider } from "@emotion/react";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
