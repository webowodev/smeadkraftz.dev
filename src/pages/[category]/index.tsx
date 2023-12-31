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
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import getPostsByCategory from "@/lib/usecases/getPostsByCategory";
import { IPosts } from "@/lib/entities/post";
import BaseLayout from "@/layouts/baseLayout";
import AppContainer from "@/components/atoms/appContainer";
import LazyImage from "@/components/atoms/lazyImage";
import ArticleCard from "@/components/molecules/articleCard";

export const getServerSideProps = (async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const category: string = context.params?.category as string;

  console.log("category", category);

  // fetch data
  const results = await Promise.all([
    await getMenuBySlug(category),
    await fetchCommonData(),
  ]);

  console.log("menus", results[0]);

  if (!results[0].data) {
    return {
      notFound: true,
    };
  }

  const { data: posts } = await getPostsByCategory(results[0].data.name);

  return {
    props: {
      ...results[1],
      category: results[0].data ?? null,
      posts: posts ?? [],
    },
  };
}) satisfies GetServerSideProps<{
  menus: IMenus;
  category: IMenu;
  posts: IPosts;
}>;

export default function Category({
  category,
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <BaseLayout title={category.name} description={category.description}>
      <AppContainer
        maxW={"container.md"}
        pt={24}
        pb={24}
        px={{ base: 5, lg: 40, xl: 12 }}
      >
        {category && category?.imageUrl ? (
          <LazyImage
            borderRadius={8}
            src={category.imageUrl}
            width={0}
            height={0}
            layout="fill"
            sizes="(100vw, 100vh)"
            objectFit="cover"
            draggable={false}
            style={{ width: "100%", height: "320px", pointerEvents: "none" }}
            alt={category.name}
            mb={8}
          />
        ) : null}
        <Stack spacing={8}>
          {category ? <BlocksRenderer data={category.blocks ?? []} /> : null}

          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={4}
          >
            {posts.map((post) => {
              return (
                <GridItem key={post.id}>
                  <ArticleCard
                    title={post.title}
                    url={`/${category.slug}/${post.slug}`}
                    imageUrl={post.imageUrl}
                    description={post.description}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Stack>
      </AppContainer>
    </BaseLayout>
  );
}
