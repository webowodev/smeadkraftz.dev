import theme from "@/common/theme";
import BaseProvider from "@/providers/baseProvider";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <BaseProvider menus={pageProps.menus}>
        <Component {...pageProps} />
      </BaseProvider>
    </ChakraProvider>
  );
}
