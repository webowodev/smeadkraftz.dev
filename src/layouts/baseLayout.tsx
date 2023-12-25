import Head from "next/head";
import { useRouter } from "next/router";
import { PropsWithChildren, useMemo } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/organisms/footer";

export type IBaseLayout = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

export default function BaseLayout({
  children,
  title,
  description,
  imageUrl,
}: PropsWithChildren<IBaseLayout>) {
  const router = useRouter();

  const url: string = process.env.NEXT_PUBLIC_BASE_URL + router.asPath;

  const variants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 20,
    },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    exit: {
      opacity: 0,
      x: 0,
      y: 20,
    },
  };

  const pageTitle: string = useMemo<string>(
    () => `${title} - Dimas Wibowo`,
    [title]
  );

  return (
    <motion.div
      initial={"hidden"}
      animate={"enter"}
      exit={"exit"}
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        <Head>
          <title>{pageTitle}</title>
          {description ? (
            <meta name="description" content={description} />
          ) : null}
          <meta name="author" content="smeadkraftz" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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

          {/* Open Graph Meta Tags for Facebook and LinkedIn */}
          <meta property="og:title" content={pageTitle} />
          {description ? (
            <meta property="og:description" content={description} />
          ) : null}
          <meta
            property="og:image"
            content={
              imageUrl ?? process.env.NEXT_PUBLIC_BASE_URL + "/images/card.png"
            }
          />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          {description ? (
            <meta name="twitter:description" content={description} />
          ) : null}
          <meta
            name="twitter:image"
            content={
              imageUrl ?? process.env.NEXT_PUBLIC_BASE_URL + "/images/card.png"
            }
          />
          <meta name="twitter:url" content={url} />
          <meta name="twitter:site" content="@daemswibowo" />
          <meta name="twitter:creator" content="@daemswibowo" />
        </Head>
        {children}
        <Footer />
      </>
    </motion.div>
  );
}
