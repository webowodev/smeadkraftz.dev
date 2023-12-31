import BlocksRenderer from "@/components/molecules/blocksRenderer";
import ArticleLayout from "@/layouts/articleLayout";
import { IMenus } from "@/lib/entities/menu";
import { IPost } from "@/lib/entities/post";
import fetchCommonData from "@/lib/usecases/fetchCommonData";
import getMenuBySlug from "@/lib/usecases/getMenu";
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
  const category: string = context.params?.category as string;
  const slug: string = context.params?.slug as string;

  // fetch data
  const results = await Promise.all([
    await getPostDetail(slug),
    await fetchCommonData(),
    await getMenuBySlug(category),
  ]);

  let notFound = false;

  if (!results[2].data || !results[0].data) {
    notFound = true;
  }

  return {
    props: {
      post: results[0].data ?? null,
      ...results[1],
    },
    notFound,
  };
}) satisfies GetServerSideProps<{
  post: IPost | null;
  menus: IMenus;
}>;

export default function PostDetailPage({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <ArticleLayout
      title={post?.title}
      description={post?.description}
      imageUrl={post?.imageUrl ?? undefined}
    >
      <Box as="article">
        <Heading size={"xl"} mb={"0.5rem"}>
          {post?.title}
        </Heading>

        <BlocksRenderer data={post?.blocks ?? []} />
      </Box>
    </ArticleLayout>
  );
}
