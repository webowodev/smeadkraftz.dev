import getMenuBySlug from "@/lib/usecases/getMenu";
import getPostsByCategory from "@/lib/usecases/getPostsByCategory";
import AppContainer from "@/components/atoms/appContainer";
import { notFound } from "next/navigation";
import LazyImage from "@/components/atoms/lazyImage";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import BlocksRenderer from "@/components/molecules/blocksRenderer";
import ArticleCard from "@/components/molecules/articleCard";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default async function Category({ params }: CategoryPageProps) {
  const result = await getMenuBySlug(params.category);
  console.log("category", result);

  if (!result.data) {
    // return not found when category not found
    return notFound();
  }

  const { data: posts } = await getPostsByCategory(result.data.name);

  const category = result.data;

  return (
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
          {(posts ?? []).map((post) => {
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
  );
}
