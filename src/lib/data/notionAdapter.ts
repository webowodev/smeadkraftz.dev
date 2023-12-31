import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const fetchPages = React.cache(
  (
    databaseId: string,
    query?: Omit<QueryDatabaseParameters, "database_id">
  ): Promise<QueryDatabaseResponse> => {
    return notion.databases.query({
      database_id: databaseId,
      ...query,
    });
  }
);

export const fetchPageBySlug = React.cache(
  (
    databaseId: string,
    slug: string
  ): Promise<PageObjectResponse | undefined> => {
    console.log("fetchPageBySlug", databaseId, slug);
    const result = notion.databases
      .query({
        database_id: databaseId,
        filter: {
          and: [
            {
              property: "Status",
              status: {
                equals: "Published",
              },
            },
            {
              property: "Slug",
              rich_text: {
                equals: slug,
              },
            },
          ],
        },
      })
      .then((res) => {
        return res.results[0] as PageObjectResponse | undefined;
      });

    return result;
  }
);

export const fetchPageBlocks = React.cache((pageId: string) => {
  return notion.blocks.children.list({ block_id: pageId }).then((res) => {
    console.log("fetchPageBlocks:", JSON.stringify(res.results));
    return res.results as BlockObjectResponse[];
  });
});

export default notion;
