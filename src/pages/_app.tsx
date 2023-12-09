import theme from "@/common/theme";
import BaseProvider from "@/providers/baseProvider";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import NavigationHeader from "@/components/organisms/home/navigationHeader";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode={"wait"} initial={true}>
        <BaseProvider menus={pageProps.menus}>
          <NavigationHeader />
          <Component key={router.asPath} {...pageProps} />
        </BaseProvider>
      </AnimatePresence>
      <SpeedInsights />
    </ChakraProvider>
  );
}
