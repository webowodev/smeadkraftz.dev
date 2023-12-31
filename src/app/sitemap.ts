import { fetchPages } from "@/lib/data/notionAdapter";
import { IMenus } from "@/lib/entities/menu";
import getMenus from "@/lib/usecases/getMenus";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { MetadataRoute } from "next";

type ISiteMap = {
  url: string;
  lastModified?: string;
  changeFrequency?: string;
  priority?: number;
};

function generateUrlsFromMenus(menus: IMenus): ISiteMap[] {
  return menus.map((menu) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${menu.slug}`,
      lastModified: menu.lastEditedTime,
      changeFrequency: "weekly",
      priority: 1,
    };
  });
}

function generateUrlsFromPages(pages: PageObjectResponse[]): ISiteMap[] {
  console.log("pages:", JSON.stringify(pages));
  return pages.map((page) => {
    return {
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL
        // @ts-ignore
      }/${page.properties.Category.select.name.toLowerCase()}/${
        // @ts-ignore
        page.properties.Slug.rich_text[0].plain_text
      }`,
      lastModified: page.last_edited_time,
      changeFrequency: "weekly",
      priority: 1,
    };
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const results = await Promise.all([
    getMenus().then((res) => {
      if (res.data) {
        return generateUrlsFromMenus(res.data);
      }
      return [];
    }),
    fetchPages(process.env.NOTION_POSTS_DATABASE_ID as string, {
      filter: {
        property: "Status",
        status: {
          equals: "Published",
        },
      },
    }).then((res) => {
      if (res.results) {
        // @ts-ignore
        return generateUrlsFromPages(res.results);
      }
      return [];
    }),
  ]);

  // merge results to urls
  const urls: any = [...results[0], ...results[1]];

  /**
   * Example returns
   * [{
      url: "https://acme.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },]
   */
  return urls;
}
