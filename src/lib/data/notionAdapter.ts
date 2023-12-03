import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const fetchPages = (
  databaseId: string,
  query?: Omit<QueryDatabaseParameters, "database_id">
): Promise<QueryDatabaseResponse> => {
  return notion.databases.query({
    database_id: databaseId,
    ...query,
  });
};

export const fetchPageBySlug = (slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
};

export const fetchPageBlocks = (pageId: string) => {
  return notion.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
};

export default notion;
