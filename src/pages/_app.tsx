import theme from "@/common/theme";
import CategoryProvider from "@/providers/categoryProvider";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CategoryProvider categories={pageProps.categories}>
        <Component {...pageProps} />
      </CategoryProvider>
    </ChakraProvider>
  );
}
