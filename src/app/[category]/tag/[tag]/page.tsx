import getMenuBySlug from "@/lib/usecases/getMenu";
import getPostsByCategory from "@/lib/usecases/getPostsByCategory";
import AppContainer from "@/components/atoms/appContainer";
import { notFound } from "next/navigation";
import { Center, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import ArticleCard from "@/components/molecules/articleCard";
import { Metadata } from "next";
import NoPosts from "@/components/molecules/article/noPosts";
import Tags from "@/components/molecules/tags";

type CategoryPageProps = {
  params: {
    category: string;
    tag: string;
  };
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const result = await getMenuBySlug(params.category);

  if (!result.data) {
    // return not found when category not found
    return {
      title: "Not Found",
      description: "Page Not Found",
      openGraph: {
        images: ["https://webowo.dev/images/card.png"],
      },
    };
  }

  return {
    title: result.data?.name,
    description: result.data?.description,
    openGraph: {
      images: result.data?.imageUrl ? [result.data?.imageUrl] : [],
    },
  };
}
export default async function Category({ params }: CategoryPageProps) {
  const result = await getMenuBySlug(params.category);

  if (!result.data) {
    // return not found when category not found
    return notFound();
  }

  const { data: posts } = await getPostsByCategory(
    result.data.name,
    params.tag
  );

  const category = result.data;

  return (
    <AppContainer
      maxW={"container.md"}
      pt={24}
      pb={24}
      minH={"100vh"}
      px={{ base: 5, lg: 40, xl: 12 }}
    >
      <Stack spacing={8}>
        <Center mb={8}>
          <Stack textAlign={"center"} spacing={4}>
            <Heading as="h1">
              {category?.name} About {params.tag}
            </Heading>
            <Tags
              items={[
                { title: "React", url: `/${params.category}/tag/React` },
                { title: "Vue", url: `/${params.category}/tag/Vue` },
                { title: "NodeJS", url: `/${params.category}/tag/NodeJS` },
                { title: "AWS", url: `/${params.category}/tag/AWS` },
                { title: "Laravel", url: `/${params.category}/tag/Laravel` },
              ]}
            />
          </Stack>
        </Center>

        {!posts || posts.length === 0 ? <NoPosts /> : null}

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={4}
        >
          {(posts ?? []).map((post) => {
            return (
              <GridItem key={post.id}>
                <ArticleCard
                  title={post.title}
                  url={`/${category.slug}/${post.slug}`}
                  imageUrl={post.imageUrl}
                  description={post.description}
                  tags={post.tags?.map((tag) => ({
                    title: tag,
                    url: `/${params.category}/tag/${tag}`,
                  }))}
                />
              </GridItem>
            );
          })}
        </Grid>
      </Stack>
    </AppContainer>
  );
}
