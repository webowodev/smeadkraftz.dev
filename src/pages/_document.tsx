import theme from "@/common/theme";
import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
