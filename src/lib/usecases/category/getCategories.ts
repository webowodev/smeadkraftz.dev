import { fetchPages } from "../../data/notionAdapter";
import { ICategories } from "@/lib/entities/category";
import BaseResponse from "@/common/baseResponse";

export default async function getCategories(): Promise<
  BaseResponse<ICategories>
> {
  try {
    const { results } = await fetchPages(
      process.env.NOTION_CATEGORIES_DATABASE_ID as string,
      {
        filter: {
          property: "Status",
          status: {
            equals: "Published",
          },
        },
        sorts: [
          {
            direction: "ascending",
            property: "Position",
          },
        ],
      }
    );

    return {
      data: results.map((page) => ({
        id: page.id,
        // @ts-ignore
        name: page.properties.Name.title[0].plain_text,
      })),
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
