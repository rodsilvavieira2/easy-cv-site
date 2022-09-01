import "@fontsource/roboto";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { Footer, Header } from "@components";
import { theme } from "@styles";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
