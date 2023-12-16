import theme from "@/common/theme";
import BaseProvider from "@/providers/baseProvider";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import NavigationHeader from "@/components/organisms/home/navigationHeader";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <ChakraProvider theme={theme}>
        <AnimatePresence mode={"wait"} initial={true}>
          <BaseProvider menus={pageProps.menus}>
            <NavigationHeader />
            <Component key={router.asPath} {...pageProps} />
          </BaseProvider>
        </AnimatePresence>
        <Analytics />
        <SpeedInsights />
      </ChakraProvider>
    </>
  );
}
