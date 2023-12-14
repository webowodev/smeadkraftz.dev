import { fetchPages } from "@/lib/data/notionAdapter";
import { IMenus } from "@/lib/entities/menu";
import getMenus from "@/lib/usecases/getMenus";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetServerSidePropsContext } from "next";

type IUrl = {
  url: string;
};
function generateSiteMap(urls: IUrl[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the URLs we know already-->
     <url>
       <loc>https://smeadkraftz.dev</loc>
     </url>
     ${urls
       .map((url) => {
         return `
       <url>
           <loc>${url.url}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

function generateUrlsFromMenus(menus: IMenus) {
  return menus.map((menu) => {
    return {
      url: `https://smeadkraftz.dev/${menu.slug}`,
    };
  });
}

function generateUrlsFromPages(pages: PageObjectResponse[]) {
  return pages.map((page) => {
    return {
      // @ts-ignore
      url: `https://smeadkraftz.dev/${page.properties.Category.select.name.toLowerCase()}/${
        // @ts-ignore
        page.properties.Slug.rich_text[0].plain_text
      }`,
    };
  });
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  // We make an API call to gather the URLs for our site
  //   const request = await fetch(EXTERNAL_DATA_URL);
  //   const posts = await request.json();
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
  const urls: IUrl[] = [...results[0], ...results[1]];

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(urls);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
