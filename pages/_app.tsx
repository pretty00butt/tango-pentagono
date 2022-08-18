import type { AppProps } from "next/app";
import { theme } from "theme";
import Head from "components/Head";

import { ThemeProvider } from "@emotion/react";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
