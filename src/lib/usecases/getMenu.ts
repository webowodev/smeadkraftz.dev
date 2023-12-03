import { fetchPageBlocks, fetchPages } from "../data/notionAdapter";
import BaseResponse from "@/common/baseResponse";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { IMenu } from "../entities/menu";

export default async function getMenuByName(
  name: string
): Promise<BaseResponse<IMenu | undefined>> {
  try {
    const { results } = await fetchPages(
      process.env.NOTION_MENUS_DATABASE_ID as string,
      {
        filter: {
          property: "Status",
          status: {
            equals: "Published",
          },
          and: [
            {
              property: "Name",
              rich_text: {
                contains: name,
              },
            },
          ],
        },
        sorts: [
          {
            direction: "ascending",
            property: "Position",
          },
        ],
      }
    );

    const result = results[0] as PageObjectResponse | undefined;

    let data: IMenu | undefined = result
      ? {
          id: result.id,
          // @ts-ignore
          name: result.properties["Name"].title[0].plain_text,
          // @ts-ignore
          url: result.properties["URL"].rich_text[0].plain_text,
          // @ts-ignore
          description: result.properties["URL"].rich_text[0].plain_text,
        }
      : undefined;

    // fetch blocks
    if (data) {
      const blocks = await fetchPageBlocks(data.id);

      data.blocks = blocks;
    }

    return {
      data: data,
      error: null,
    };
  } catch (e: unknown) {
    console.warn("Failed to get menu by name:", e);
    return {
      data: null,
      error: e,
    };
  }
}
