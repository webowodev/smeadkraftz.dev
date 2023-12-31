import { fetchPageBlocks, fetchPages } from "../data/notionAdapter";
import BaseResponse from "@/common/baseResponse";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { IMenu } from "../entities/menu";
import { getCoverUrl, getPlainTextProperty } from "@/common/getProperty";

export default async function getMenuBySlug(
  slug: string
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
              property: "Slug",
              rich_text: {
                equals: slug,
              },
            },
          ],
        },
      }
    );

    const result = results[0] as PageObjectResponse | undefined;

    if (result && getPlainTextProperty(result, "Slug") !== slug) {
      return {
        data: null,
        error: "Not found",
      };
    }

    let data: IMenu | undefined = result
      ? {
          id: result.id,
          name: getPlainTextProperty(result, "Name"),
          slug: getPlainTextProperty(result, "Slug"),
          description: getPlainTextProperty(result, "Description"),
          imageUrl: getCoverUrl(result),
          url: getPlainTextProperty(result, "URL"),
        }
      : undefined;

    // fetch blocks
    if (data) {
      const blocks = await fetchPageBlocks(data.id);

      data.blocks = blocks;
    }

    console.info("getMenuBySlug:", slug, data);

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
