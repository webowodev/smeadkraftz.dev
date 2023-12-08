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
import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import getPostsByCategory from "@/lib/usecases/getPostsByCategory";
import { IPosts } from "@/lib/entities/post";
import Image from "@/components/atoms/image";
import { Link } from "@chakra-ui/next-js";

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
    <BaseLayout description={category.description}>
      <Head>
        <title>{category.name} - Dimas Wibowo</title>
      </Head>
      <main>
        {category && category?.imageUrl ? (
          <Box
            flex={1}
            h={320}
            bgImage={category.imageUrl}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
          />
        ) : null}
        <AppContainer
          pt={category && category?.imageUrl ? 8 : 24}
          pb={12}
          minH="90vh"
        >
          <Stack spacing={8}>
            {category ? <BlocksRenderer data={category.blocks ?? []} /> : null}

            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={4}
            >
              {posts.map((post) => (
                <GridItem key={post.id}>
                  <Link href={`/posts/${post.slug}`}>
                    <Card shadow={0} bgColor={"transparent"}>
                      <CardBody p={0} textAlign={"center"}>
                        {post.imageUrl ? (
                          <Image
                            mb={4}
                            borderRadius={8}
                            src={post.imageUrl}
                            width={375}
                            height={200}
                            objectFit="cover"
                            placeholder="blur"
                            draggable={false}
                            alt={post.title}
                          />
                        ) : null}
                        <Text
                          fontFamily={"heading"}
                          fontWeight="bold"
                          fontSize={18}
                        >
                          {post.title}
                        </Text>
                        <Text>{post.description}</Text>
                      </CardBody>
                    </Card>
                  </Link>
                </GridItem>
              ))}
            </Grid>
          </Stack>
        </AppContainer>
      </main>
    </BaseLayout>
  );
}
