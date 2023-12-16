import theme from "@/common/theme";
import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {(process.env.NODE_ENV === "development" ||
          process.env.VERCEL_ENV === "preview") && (
          // add script for meticulous e2e testing
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-project-id="UtSuUsNdn7ThhMjRlL7rlHTJT7HTJMpS2iQANUht"
            data-is-production-environment="false"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
