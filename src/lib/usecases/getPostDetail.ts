import BaseResponse from "@/common/baseResponse";
import { IPost } from "../entities/post";
import { fetchPageBlocks, fetchPageBySlug } from "../data/notionAdapter";
import { getCoverUrl, getPlainTextProperty } from "@/common/getProperty";

export default async function getPostDetail(
  slug: string
): Promise<BaseResponse<IPost>> {
  try {
    const result = await fetchPageBySlug(
      process.env.NOTION_POSTS_DATABASE_ID as string,
      slug
    );

    if (!result) {
      return {
        data: null,
        error: "Post not found",
      };
    }

    // fetch blocks
    const blocks = await fetchPageBlocks(result.id);

    return {
      data: {
        id: result.id,
        title: getPlainTextProperty(result, "Name") ?? "",
        slug: getPlainTextProperty(result, "Slug"),
        date: result.created_time,
        description: getPlainTextProperty(result, "Description"),
        imageUrl: getCoverUrl(result),
        blocks: blocks ?? [],
      },
      error: null,
    };
  } catch (e: unknown) {
    console.warn("Failed to get post detail:", e);
    return {
      data: null,
      error: e,
    };
  }
}
