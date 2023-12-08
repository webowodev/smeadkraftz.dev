import BaseLayout from "@/layouts/baseLayout";
import AppContainer from "@/components/atoms/appContainer";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  PreviewData,
} from "next";
import { IMenu, IMenus } from "@/lib/entities/menu";
import fetchCommonData from "@/lib/usecases/fetchCommonData";
import { ParsedUrlQuery } from "querystring";
import getMenuBySlug from "@/lib/usecases/getMenu";
import BlocksRenderer from "@/components/molecules/blocksRenderer";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

export const getServerSideProps = (async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const category: string = context.params?.category as string;

  // fetch data
  const results = await Promise.all([
    await getMenuBySlug(category),
    await fetchCommonData(),
  ]);

  if (!results[0].data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...results[1],
      category: results[0].data ?? null,
    },
  };
}) satisfies GetServerSideProps<{
  menus: IMenus;
  category: IMenu;
}>;

export default function Category({
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <BaseLayout description={category.description}>
      <Head>
        <title>{category.name}</title>
      </Head>
      <main>
        {category?.imageUrl ? (
          <Box
            flex={1}
            h={320}
            bgImage={category.imageUrl}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
          />
        ) : null}
        <AppContainer pt={category.imageUrl ? 8 : 24} pb={12} minH="90vh">
          {category ? <BlocksRenderer data={category.blocks ?? []} /> : null}
        </AppContainer>
      </main>
    </BaseLayout>
  );
}
