import { fetchPages } from "../data/notionAdapter";
import BaseResponse from "@/common/baseResponse";
import { IPosts } from "../entities/post";
import { get } from "lodash";
import { getCoverUrl, getPlainTextProperty } from "@/common/getProperty";

export default async function getPostsByCategory(
  category: string
): Promise<BaseResponse<IPosts>> {
  try {
    const { results } = await fetchPages(
      process.env.NOTION_POSTS_DATABASE_ID as string,
      {
        filter: {
          property: "Status",
          status: {
            equals: "Published",
          },
          and: [
            {
              property: "Category",
              select: {
                equals: category,
              },
            },
          ],
        },
      }
    );

    console.info("getPostsByCategory:", results[0]);

    return {
      data: results.map((page) => {
        return {
          id: page.id,
          title: getPlainTextProperty(page, "Name"),
          slug: getPlainTextProperty(page, "Slug"),
          date: get(page, "created_time", ""),
          description: getPlainTextProperty(page, "Description"),
          imageUrl: getCoverUrl(page),
        };
      }),
      error: null,
    };
  } catch (e: unknown) {
    console.warn("Failed to get categories:", e);
    return {
      data: null,
      error: e,
    };
  }
}
