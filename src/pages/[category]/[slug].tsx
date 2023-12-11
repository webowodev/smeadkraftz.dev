import AppContainer from "@/components/atoms/appContainer";
import BlocksRenderer from "@/components/molecules/blocksRenderer";
import BaseLayout from "@/layouts/baseLayout";
import { IMenus } from "@/lib/entities/menu";
import { IPost } from "@/lib/entities/post";
import fetchCommonData from "@/lib/usecases/fetchCommonData";
import getPostDetail from "@/lib/usecases/getPostDetail";
import { Box, Heading } from "@chakra-ui/react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";

export const getServerSideProps = (async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const slug: string = context.params?.slug as string;

  // fetch data
  const results = await Promise.all([
    await getPostDetail(slug),
    await fetchCommonData(),
  ]);

  if (!results[0].data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: results[0].data ?? null,
      ...results[1],
    },
  };
}) satisfies GetServerSideProps<{
  post: IPost;
  menus: IMenus;
}>;

export default function PostDetailPage({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <BaseLayout
      title={post.title}
      description={post.description}
      imageUrl={post.imageUrl ?? undefined}
    >
      {post?.imageUrl ? (
        <Box
          flex={1}
          h={320}
          bgImage={post.imageUrl}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
        />
      ) : null}
      <AppContainer pt={post && post?.imageUrl ? 8 : 24} pb={12} minH="90vh">
        <Box as="article">
          <Heading size={"xl"} mb={"0.5rem"}>
            {post.title}
          </Heading>

          <BlocksRenderer data={post.blocks ?? []} />
        </Box>
      </AppContainer>
    </BaseLayout>
  );
}
