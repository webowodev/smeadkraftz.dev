import NavigationHeader from "@/components/organisms/home/navigationHeader";
import { Providers } from "./providers";
import "@/app/globals.css";
import fetchCommonData from "@/lib/usecases/fetchCommonData";
import Footer from "@/components/organisms/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { fonts } from "./fonts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { menus } = await fetchCommonData();

  return (
    <html lang="en" className={fonts.urbanist.variable}>
      <head>
        <meta name="author" content="Dimas Wibowo" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#181a20" />
        <meta name="msapplication-TileColor" content="#181a20" />
        <meta name="theme-color" content="#181a20" />
      </head>
      <body>
        <Providers menus={menus}>
          <NavigationHeader />
          {children}
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "G-WQCQ11Q7W8"}
      />
    </html>
  );
}
