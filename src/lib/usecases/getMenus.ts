import { fetchPages } from "../data/notionAdapter";
import { IMenus } from "@/lib/entities/menu";
import BaseResponse from "@/common/baseResponse";

export default async function getMenus(): Promise<BaseResponse<IMenus>> {
  try {
    const { results } = await fetchPages(
      process.env.NOTION_MENUS_DATABASE_ID as string,
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
        name: page.properties["Name"].title[0].plain_text,
        // @ts-ignore
        url: page.properties["URL"].rich_text[0].plain_text,
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
