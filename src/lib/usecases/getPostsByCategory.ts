import { fetchPages } from "../data/notionAdapter";
import BaseResponse from "@/common/baseResponse";
import { IPosts } from "../entities/post";
import { get } from "lodash";
import {
  getCoverUrl,
  getPlainTextProperty,
  getProperty,
} from "@/utils/getProperty";

export default async function getPostsByCategory(
  category: string,
  tag?: string
): Promise<BaseResponse<IPosts>> {
  try {
    let filters: any = [
      {
        property: "Category",
        select: {
          equals: category,
        },
      },
      {
        property: "Status",
        status: {
          equals: "Published",
        },
      },
    ];

    if (tag) {
      filters.push({
        property: "Tags",
        multi_select: {
          contains: tag,
        },
      });
    }

    const { results } = await fetchPages(
      process.env.NOTION_POSTS_DATABASE_ID as string,
      {
        filter: {
          and: filters,
        },
      }
    );

    console.info("getPostsByCategory:", JSON.stringify(results[0]));

    return {
      data: results.map((page) => {
        return {
          id: page.id,
          title: getPlainTextProperty(page, "Name"),
          slug: getPlainTextProperty(page, "Slug"),
          date: get(page, "created_time", ""),
          description: getPlainTextProperty(page, "Description"),
          imageUrl: getCoverUrl(page),
          tags:
            getProperty(page, "Tags", [])?.map((tag: any) => tag.name) ?? [],
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
