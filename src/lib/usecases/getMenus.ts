import { fetchPages } from "../data/notionAdapter";
import { IMenus } from "@/lib/entities/menu";
import BaseResponse from "@/common/baseResponse";
import { getPlainTextProperty } from "@/utils/getProperty";

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
        name: getPlainTextProperty(page, "Name"),
        slug: getPlainTextProperty(page, "Slug"),
        url: getPlainTextProperty(page, "URL"),
        // @ts-ignore
        lastEditedTime: page.last_edited_time,
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
