import BlocksRenderer from "@/components/molecules/blocksRenderer";
import { IPost } from "@/lib/entities/post";
import getMenuBySlug from "@/lib/usecases/getMenu";
import getPostDetail from "@/lib/usecases/getPostDetail";
import { Box, Heading } from "@chakra-ui/react";
import { Metadata } from "next";

import { notFound } from "next/navigation";

type PostDetailProps = {
  params: { slug: string; category: string };
};

export async function generateMetadata({
  params,
}: PostDetailProps): Promise<Metadata> {
  const result = await getPostDetail(params.slug);
  return {
    title: result.data?.title,
    description: result.data?.description + " - Dimas Wibowo",
    openGraph: {
      images: result.data?.imageUrl ? [result.data?.imageUrl] : [],
    },
  };
}

export default async function PostDetailPage({
  params: { slug, category },
}: PostDetailProps) {
  const results = await Promise.all([
    await getMenuBySlug(category),
    await getPostDetail(slug),
  ]);

  if (!results[0].data || !results[1].data) {
    return notFound();
  }

  const post: IPost | null = results[1].data ?? null;

  return (
    <Box as="article">
      <Heading size={"xl"} mb={"0.5rem"}>
        {post?.title}
      </Heading>

      <BlocksRenderer data={post?.blocks ?? []} />
    </Box>
  );
}
