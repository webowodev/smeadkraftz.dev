import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type IMenu = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  blocks?: BlockObjectResponse[];
};

export type IMenus = IMenu[];
